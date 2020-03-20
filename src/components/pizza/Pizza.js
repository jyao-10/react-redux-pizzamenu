import React, { Component } from "react";
import "./Pizza.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Tomato from "../toppings/Tomato";
import Veggie from "../toppings/Veggie";
import Mushroom from "../toppings/Mushroom";
import Corn from "../toppings/Corn";
import Button from "../button/Button";
import Order from "../Order";
import { SetToppingValues } from '../../actions';
import { connect } from 'react-redux';

import Menu from '../menu/Menu';

class Pizza extends Component {
   constructor(props) {
      super(props);
      this.state = {
         values : {
            tomato: false,
            mushroom: false,
            veggie: false,
            corn: false
         },
         isDone: false
      };
     }


     clickEventHandler = ingredient => {
        if (ingredient === "submit") {
            this.setState({
                isDone : !this.state.isDone
            },
            () => this.props.dispatch(
                SetToppingValues(this.state.values))
              );
        }else if (ingredient === "tomato") {
            this.setState({
                  values : { ...this.state.values, tomato: !this.state.values.tomato }
               });
         } else if (ingredient === "mushroom") {
            this.setState({
                  values : { ...this.state.values, mushroom: !this.state.values.mushroom }
               });
         } else if (ingredient === "corn") {
            this.setState({
                  values : { ...this.state.values, corn: !this.state.values.corn }
               });
         } else {
            this.setState({
                values : { ...this.state.values, veggie: !this.state.values.veggie }
               });
         }
      };

     render() {

      if (this.state.isDone === true) {
          return (
            <Order />
          );
      }
      const tomato = this.state.values.tomato && <Tomato />;
      const mushroom = this.state.values.mushroom && <Mushroom />;
      const corn = this.state.values.corn && <Corn />;
      const veggie = this.state.values.veggie && <Veggie />;

      return (
         <div>
         <Menu />
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
                  <Button eventHandler={this.clickEventHandler} />
               </div>
            </div>
      );
   }
}
export default connect()(Pizza);