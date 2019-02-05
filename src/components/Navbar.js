import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt="home" className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/product' className='nav-link'>Products</Link>
          </li> 
        </ul>

        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'> <i className="fas fa-cart-plus" /></span>
            My cart
        </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainDark) !important;
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
.navbar-brand {
  width: 9rem;
  heigth: 4rem;
  color: #f3f3f3;
  }

`

