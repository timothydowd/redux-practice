import React, { Component } from 'react'
import { connect } from 'react-redux'

class RestaurantLocationSearch extends Component {
  

    render() {
       
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    What area would you like to dine in?
                    <input type='text' name='area' placeholder='where do you want to eat?' onChange={this.handleChange} ></input>
                    <input type='submit' value='Search' ></input>
                </form>
            </div>
        )
    }

    handleSubmit(event){
        event.preventDefault()
        Promise.resolve(this.props.filterRestaurantsByArea()).then(() => {
            console.log('filteredRestaurants handleSubmit: ', this.props.filteredRestaurants)
        })
        
    }

    handleChange = (event) => {
        event.preventDefault()
        Promise.resolve(this.props.updateLocationSearchTerm(event.target.value)).then(() => {
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLocationSearchTerm: (searchTerm) => { dispatch({ type: "UPDATE_LOCATION_SEARCH_TERM", searchTerm: searchTerm }) },
        filterRestaurantsByArea: () => { dispatch({ type: "FILTER_RESTAURANTS_BY_AREA" })}
        }
}

const mapStateToProps = (state) => {
    return {
        locationSearchTerm: state.locationSearchTerm,
        filteredRestaurants: state.filteredRestaurants
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantLocationSearch)