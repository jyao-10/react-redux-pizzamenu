import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Contact from '../Contact'
import Sauce from '../Sauce'
import Pizza from '../pizza/Pizza'
import Order from '../Order'

const colors = [
    'red'
]

class MenuBar extends Component {
    static propTypes = {
      color: PropTypes.string,
    }
  
    state = { activeItem: 'contact'}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name})
  
    render() {
      const { color } = this.props
      const { activeItem } = this.state.activeItem
  
      return (
        <Menu color={color} inverted widths={4}>
          <Menu.Item
            as={ Link }
            name='contact'
            to='Contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            name='sauce'
            to='Sauce'
            active={activeItem === 'sauce'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            name='toppings'
            to='/Toppings'
            active={activeItem === 'toppings'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={ Link }
            name='Final order'
            to='Order'
            active={activeItem === 'order'}
            onClick={this.handleItemClick}
            />
        </Menu>
      )
    }
  }
  
  const MenuExampleColoredInvertedMenus = () => {
    const menus = colors.map((color) => <MenuBar color={color} key={color} />)
  
    return <div>{menus}</div>
  }
  export default MenuExampleColoredInvertedMenus

