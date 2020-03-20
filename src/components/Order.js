import React from 'react';
import { connect } from 'react-redux';
import Menu from './menu/Menu';

const mapStateToProps = state => {
    return { 
        customerValues : state.customerValues,
        sauceValues : state.sauceValues,
        toppingList: state.toppingsList
    }
}

const Order = ({customerValues, sauceValues, toppingList}) => (
    <div>
        <Menu />
            <h1> Contact Information: </h1>
            <h2>Name: {customerValues.name}</h2>
            <h2>Email: {customerValues.email}</h2>
            <h2>Address: {customerValues.address}</h2>
            <h2>Phone Number: {customerValues.phoneNo}</h2>

            <h1> Sauce and Crust Type:</h1>
            <h2>Sauce: {sauceValues.sauce} </h2>
            <h2>Crust: {sauceValues.crust}</h2>
           
            <h1> Toppings: </h1>
            {Object.entries(toppingList).map(([key, val]) =>
                    <h2>{key} : {val}</h2>)}
    </div>
);
export default connect(mapStateToProps)(Order);

