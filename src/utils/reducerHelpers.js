const filterRestaurantsByArea = (restaurants, location) => {
    if(!location) return restaurants
    const filteredrestaurantsByArea = restaurants.reduce((filteredRestaurantsAcc, restaurant) => {
        return restaurant.location === location ? [...filteredRestaurantsAcc, restaurant] : filteredRestaurantsAcc
    }, [])

    return filteredrestaurantsByArea
}

module.exports = { filterRestaurantsByArea }