const deepFreeze = require('deep-freeze') 
const { filterRestaurantsByAreaReducer } = require('../reducers/restaurantReducers') 
const { expect } = require('chai')
const restaurantData = require('../data/testData.json')

describe('filterRestaurantsByAreaReducer', () => {
    it('when passed state and action, it returns a new state that does not mutate the existing state or action', () => {
        const action = {
            type: 'FILTER_RESTAURANTS_BY_AREA',
            location: 'manchester'
        }
        const state = restaurantData

        deepFreeze(state)
        deepFreeze(action)
         expect(filterRestaurantsByAreaReducer(state, action).filteredRestaurants).to.have.lengthOf(2)

        const extractedLocations = filterRestaurantsByAreaReducer(state, action).filteredRestaurants.map(restaurant => {
            return restaurant.location
        })
        expect(extractedLocations).to.eql(['manchester', 'manchester'])
    });
    

});