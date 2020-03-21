import React , {Component}from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Header, Image} from 'semantic-ui-react';
import Menu from './menu/Menu';
import mainLogo from './images/logo.png';

export default class Home extends Component {

    render(){
    return (
    <div>
            <Menu />
            <Header size='huge' 
            color='yellow'>
            Welcome to World Famous Papa Jeremy's!

            </Header>

            <Button negative 
            as={ Link }
            to='Contact'
            >Order Now</Button>

            <Image src={mainLogo} size='massive' />
    </div>
    );
    }

}