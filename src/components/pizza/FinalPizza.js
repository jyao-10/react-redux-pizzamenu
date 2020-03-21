import React, { Component } from "react";

import Tomato from '../toppings/Tomato';
import Mushroom from '../toppings/Mushroom';
import Corn from '../toppings/Corn';
import Veggie from '../toppings/Veggie';
import Base from '../base/Base';

function FinalPizza(props) {
        const tomato = props.tomato && <Tomato />;
        const mushroom = props.mushroom && <Mushroom />;
        const corn = props.corn && <Corn />;
        const veggie = props.veggie && <Veggie />;
        return (
        <div className="container mt-5">
        <div className="d-flex justify-content-center">
           <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
           </div>
        </div>
     </div>
        )
        }

export default FinalPizza


