import data from '../data/restaurants.json'
import { findRestaurantsReducer } from '../reducers/restaurantReducers'

const initState = {
    restaurantData: data,
    filteredRestaurants: data,
    locationSearchTerm: ''
}

const rootReducer = ( state = initState, action) => {
    console.log('in root reducer', action)
    switch (action.type) {
        case 'FILTER_RESTAURANTS_BY_AREA' :
        return {
            ...state,
            filteredRestaurants: findRestaurantsReducer(state, action)
        }
        case 'UPDATE_LOCATION_SEARCH_TERM' :
               
        return {
            ...state,
            locationSearchTerm: findRestaurantsReducer(state, action)
        }

        default:
        return state
    }
    
}

export default rootReducer