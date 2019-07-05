
const deepFreeze = require('deep-freeze') 
const { filterRestaurantsByArea } = require('../utils/reducerHelpers') 
const { expect } = require('chai')
const restaurantData = require('../data/testData.json')

describe('filterRestaurantsByArea', () => {
    it('when passed an empy array of Restaurants and no area, return an empty array', () => {
        const restaurants = []
        const areas = ''
        deepFreeze(restaurants)
        expect(filterRestaurantsByArea(restaurants, areas)).to.eql([])
    });
    it('when passed an array of Restaurants and no area, return an array of all restaurants', () => {
        const areas = ''
        deepFreeze(restaurantData)
        expect(filterRestaurantsByArea(restaurantData, areas)).to.eql(restaurantData)
    });
    it('when passed an array of Restaurants and the area of manchester, return an array of all restaurants in manchester', () => {
        const areas = 'manchester'
        deepFreeze(restaurantData)
        expect(filterRestaurantsByArea(restaurantData, areas)).to.have.lengthOf(2)

        const extractedLocations = filterRestaurantsByArea(restaurantData, areas).map(restaurant => {
            return restaurant.location
        })
        expect(extractedLocations).to.eql(['manchester', 'manchester'])
    });

});