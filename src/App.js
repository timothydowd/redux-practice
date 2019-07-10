import React, {Component} from 'react';
import './App.css';
import { RestaurantList } from '../src/components/RestaurantList'
import  RestaurantLocationSearch  from '../src/containers/RestaurantLocationSearch'

class App extends Component {


  render() {

    return (
      <div>
        <RestaurantLocationSearch />
        <RestaurantList />
      </div>
    );
  }
}


export default App;
