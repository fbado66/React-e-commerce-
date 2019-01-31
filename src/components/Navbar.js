import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


 
export default class Navbar extends Component { 
  render() {
        return (
          <NavContainer className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            <Link id='home' to='/'>
              <span className = 'text-center text-white'>1829 Bakery</span>
            </Link>
          
            <Link to='/cart' className='ml-auto'>
              <ButtonContainer>
                <span className='mr-2'>
                  <i className='fas fa-cart-arrow-down' />
                </span>
                my cart 
                    <span id='mount'className ='hello'></span>
              </ButtonContainer>
            </Link>
            <img id='image' src='images/cake_logo.jpg' alt='background' />
          </NavContainer>
        )
      }
}

const NavContainer = styled.nav`
background: #1b143a;
.nav-link{
  color: white!important;
  font-size:1.3rem;
  text-transform: capitalize;
}
`