const { filterRestaurantsByArea } = require('../utils/reducerHelpers')


const findRestaurantsReducer = (state, action) => {
    if(action.type === 'FILTER_RESTAURANTS_BY_AREA'){
        return {
            filteredRestaurants: filterRestaurantsByArea(state.restaurantData, action.location)
        }
    } else if(action.type === 'UPDATE_LOCATION_SEARCH_TERM') {
        console.log('in findResaturantsReducer update location')
        return action.searchTerm
        
    } 
        return state
}



module.exports = { findRestaurantsReducer }