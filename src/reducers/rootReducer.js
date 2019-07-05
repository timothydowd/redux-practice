import data from '../data/restaurants.json'
import filterRestaurantsByAreaReducer from '../reducers/restaurantReducers'

const initState = {
    restaurantData: data,
    filteredRestaurants: data
}

const rootReducer = ( state = initState, action) => {
    switch (action.type) {
        case 'FILTER_RESTAURANTS_BY_AREA' :
        return {
            ...state,
            filteredRestaurants: filterRestaurantsByAreaReducer(state.restaurantData, action)
        }
        default:
        return state
    }
    
}

export default rootReducer