import React, { Component } from 'react'
import { connect } from 'react-redux'

class RestaurantList extends Component {
  

    render() {
        console.log('restaurant list filter restaurants: ',this.props.filteredRestaurants)
        
        return (
            <div>
                {this.props.filteredRestaurants.map(restaurant => {
                    const { name, location, type } = restaurant

                    return(
                        <p key={name}> {name}, {location}, {type} </p>
                    )
                })}
                
                    
            </div>
            
        )
    }

    
}



const mapStateToProps = (state) => {
    return {
        filteredRestaurants: state.filteredRestaurants
    }
}



export default connect(mapStateToProps)(RestaurantList)