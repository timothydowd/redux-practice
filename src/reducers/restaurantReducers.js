const { filterRestaurantsByArea } = require('../utils/reducerHelpers')


const findRestaurantsReducer = (state, action) => {
    if(action.type === 'FILTER_RESTAURANTS_BY_AREA'){
        return filterRestaurantsByArea(state.restaurantData, state.locationSearchTerm)
        
    } else if(action.type === 'UPDATE_LOCATION_SEARCH_TERM') {
        
        return action.searchTerm  
    } 
        return state
}



module.exports = { findRestaurantsReducer }