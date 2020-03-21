import React , {Component}from 'react';
import Sauce from './Sauce';
import { connect } from 'react-redux';
import SetCustomerValues from '../actions';

import { Form, Button, Grid, Container} from 'semantic-ui-react';
import Menu from './menu/Menu';

import ProgressBar from 'react-bootstrap/ProgressBar';

import 'semantic-ui-css/semantic.min.css';

const now = 25;

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
        <Menu /><br />

        <ProgressBar variant="success" animated now={now} label={`${now}% completed`} />
        <br />
        <Container>
        <Grid>
          <Grid.Row >
            <Grid.Column>
              <Form onSubmit = {()=> this.handleSubmit()}>
                  <Form.Input
                    fluid
                    label='Name'
                    placeholder='Name'
                    value={this.state.values.name}
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                    />
                  <br/>

                  <Form.Input
                    name='email'
                    type='text'
                    label='Email'
                    value={this.state.values.email}
                    placeholder="Email" 
                    onChange={this.handleInputChange}
                    />
                <br/>

                <Form.Input
                  name='address'
                  type='text'
                  label='Address'
                  value={this.state.values.address}
                  placeholder="Address" 
                  onChange={this.handleInputChange}
                  />
                <br />

                <Form.Input
                  name='phoneNo'
                  type='text'
                  label='Phone Number'
                  value={this.state.values.phoneNo}
                  placeholder="Phone Number" onChange={this.handleInputChange}
                  />
                <br />
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          </Container>

          </div>

      );
    }
  }

export default connect()(Contact);