import React , {Component}from 'react';
import Sauce from './Sauce';
import { connect } from 'react-redux';
import SetCustomerValues from '../actions';

import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values : {
        name: '',
        email: '',
        address: '',
        phoneNo: ''
      }, 
      formSubmitted: false
      }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      values: { ...this.state.values, [name]: value }
    },
    () => this.props.dispatch(SetCustomerValues(this.state.values))
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
          <Sauce />
        )
      }

      return(
        <div>
        <form autoComplete="off" onSubmit = {()=> this.handleSubmit()}>

          <TextField id="standard-basic" label="Name" value={this.state.values.name}
          type ="text" name="name" onChange={this.handleInputChange}
          />
          <br />

          <TextField id="standard-basic" label="Email" value={this.state.values.email}
          type ="text" name="email" onChange={this.handleInputChange}
          />
          <br />

          <TextField id="standard-basic" label="Address" value={this.state.values.address}
          type ="text" name="address" onChange={this.handleInputChange}
          />
          <br />

          <TextField id="standard-basic" label="Phone Number" value={this.state.values.phoneNo}
          type ="text" name="phoneNo" onChange={this.handleInputChange}
          />
          <br />
          
          <Button variant="outlined" type="submit" value="Submit">Submit</Button>

        </form>
        </div>
      );
    }
  }

export default connect()(Contact);