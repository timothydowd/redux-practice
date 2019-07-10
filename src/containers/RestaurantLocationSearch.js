import React, { Component } from 'react'
import { connect } from 'react-redux'

class RestaurantLocationSearch extends Component {
    // constructor(props) {
    //     super(props);
    
    //     // this.handleChange = this.handleChange.bind(this);
    //   }

    render() {
        console.log(this.props)
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
        console.log(event.target.value)
    }

    handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        Promise.resolve(this.props.updateLocationSearchTerm(event.target.value)).then(() => {
            console.log('props: ', this.props.locationSearchTerm)
        })

    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        updateLocationSearchTerm: (searchTerm) => { dispatch({ type: "UPDATE_LOCATION_SEARCH_TERM", searchTerm: searchTerm }) }

        }
}

const mapStateToProps = (state) => {
    return {
        locationSearchTerm: state.locationSearchTerm
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantLocationSearch)