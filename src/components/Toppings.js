import React , {Component} from 'react';
import { connect } from 'react-redux';
import { SetToppingValues } from '../actions';
import Order from './Order';

class Toppings extends Component {

    constructor(props) {

        super(props);
        this.state = {
            values : {
              pepperoni: false,
              mushroom: false,
              onion: false,
              sausage: false,
              cheese: false,
              olive: false
            },
            formSubmitted: false
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

      handleChange(event) {
        const name = event.target.name;
        const value = event.target.checked;

        this.setState({
            values: { ...this.state.values, [name] : value }
        })
      }
 
      handleSubmit(event){      
        this.setState({
          formSubmitted: true
        },
        () => this.props.dispatch(
          SetToppingValues(this.state.values))
        );
      }

    render(){
        if (this.state.formSubmitted === true){
            return(
              <Order />
            )
          }


        return (
            <div>
            <h1>Choose your extra toppings!</h1>

            <form onSubmit = {()=> this.handleSubmit()}>
            <label>
            Pepperoni:
            <input
                name="pepperoni"
                type="checkbox"
                check={this.state.values.pepperoni}
                onChange={this.handleChange}
                />
            </label>

            <label>
            Mushroom:
            <input
                name="mushroom"
                type="checkbox"
                check={this.state.values.mushroom}
                onChange={this.handleChange}
                />
            </label>


            <label>
            Onion:
            <input
                name="onion"
                type="checkbox"
                check={this.state.values.onion}
                onChange={this.handleChange}
                />
            </label>

            <label>
            Sausage:
            <input
                name="sausage"
                type="checkbox"
                check={this.state.values.sausage}
                onChange={this.handleChange}/>
            </label>

            <label>
            Cheese:
            <input
                name="cheese"
                type="checkbox"
                check={this.state.values.cheese}
                onChange={this.handleChange}/>
            </label>


            <label>
            Olive:
            <input
                name="olive"
                type="checkbox"
                check={this.state.values.olive}
                onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            </form>

            </div>       
        );   
    }


}

export default connect()(Toppings);