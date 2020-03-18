import React , {Component}from 'react';
import { connect } from 'react-redux';
import Toppings from './Toppings';
import { SetSauceValues } from '../actions';


class Sauce extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values : {
              sauce: '',
              crust: ''
            }
          }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          values: { ...this.state.values, [name]: value }
        },
        () => this.props.dispatch(SetSauceValues(this.state.values))
        );
      }

      handleSubmit(event){
        this.setState({
          formSubmitted:true
          })
      }

    render(){
        if (this.state.formSubmitted === true){
            return(
                <Toppings />
            )
          }

        return (
            <div>
                <h2>Choose your sauce level and crust types!</h2>

                <form onSubmit = {()=> this.handleSubmit()}>
                <label>
                    Pick your sauce level:
                    <select name = "sauce" value={this.state.values.sauce} onChange = {this.handleChange}>
                    <option></option>
                    <option value="extra">Extra Sauce</option>
                    <option value="less">Less Sauce</option>
                    <option value="spinach">Spinach and Feta</option>
                    <option value="pineapple">Pineapple</option>
                    </select>
                </label>
                <label>
                    Pick your crust type:
                    <select name = "crust" value={this.state.values.crust} onChange = {this.handleChange}>
                    <option></option>
                    <option value="thin">Thin</option>
                    <option value="thick">Thick</option>
                    <option value="stuffed">Stuffed</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>       
        );   
    }
}

export default connect()(Sauce);