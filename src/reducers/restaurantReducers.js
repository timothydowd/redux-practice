const { filterRestaurantsByArea } = require('../utils/reducerHelpers')


const filterRestaurantsByAreaReducer = (restaurantData, action) => {
    if(action.type === 'FILTER_RESTAURANTS_BY_AREA'){
        return {
            filteredRestaurants: filterRestaurantsByArea(restaurantData, action.location)
        }
    } else {
        return {
            restaurantData
        }
    }
}

module.exports = { filterRestaurantsByAreaReducer }