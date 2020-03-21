import React from 'react';
import { connect } from 'react-redux';
import Menu from './menu/Menu';
import { Table, Header } from 'semantic-ui-react';

import ProgressBar from 'react-bootstrap/ProgressBar';
import FinalPizza from './pizza/FinalPizza';


const now = 100;


const mapStateToProps = state => {
    return { 
        customerValues : state.customerValues,
        sauceValues : state.sauceValues,
        toppingList: state.toppingsList,
        toppingValues: state.toppingValues
    }
}

const Order = ({customerValues, sauceValues, toppingList, toppingValues}) => (

    <div>
        <Menu /><br />

        <ProgressBar variant="success" animated now={now} label={`${now}% completed`}  />
        <Header size='huge'>Your Pizza is on the way! Yay</Header>
        <Table color={'orange'}>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Name: <h4>{customerValues.name}</h4></Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Email: <h4>{customerValues.email}</h4></Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Address: <h4>{customerValues.address}</h4></Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Phone Number: <h4>{customerValues.phoneNo}</h4></Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Sauce: <h4>{sauceValues.sauce}</h4> </Table.Cell>

            </Table.Row>

          <Table.Row>
            <Table.Cell> Crust: <h4>{sauceValues.crust}</h4> </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell> Toppings <h4>{Object.entries(toppingList).map(([key, val]) =>
                    <h2>{val}</h2>)}</h4> </Table.Cell>
          </Table.Row>
        </Table.Body>
        </Table>

        
        <FinalPizza 
            tomato={toppingValues.tomato}
            mushroom={toppingValues.mushroom}
            veggie={toppingValues.veggie}
            corn={toppingValues.corn}
                />

    </div>
);
export default connect(mapStateToProps)(Order);

