import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

 
export default class Navbar extends Component { 

  render() {
        return (
      <NavContainer className='navbar navbar-expand-sm bg-warning navbar-dark px-sm-5'>
      <Link to='/'>
      <i className="fas fa-code" alt='bakery' ></i>
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
        <Link to='/'className='nav-link'>
        products
        </Link>
        </li>
      </ul>
        <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'>
          <i className='fas fa-cart-arrow-down' />
          </span>
          my cart 

        
        </ButtonContainer>
        </Link>

      </NavContainer>
    )
  }
}

const NavContainer = styled.nav`
background: blue;
.nav-link{
  color: white!important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`