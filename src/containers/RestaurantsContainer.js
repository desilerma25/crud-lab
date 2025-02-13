import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  ({ restaurants: state.restaurants })
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
