import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class ErrorPage extends Component {
  render() {
    return (
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-10 mx-auto text-center text-title text-uppercase pt-5'>
            <h1 className = 'display-3'> 404 </h1>
            <h2>error</h2>
            <h2>page not found</h2>
            <h4>
              the requested URL 
              <span className = 'text-danger'>
              {this.props.location.pathname}
              </span>{' '}
              was not found
            </h4>
            <p className = 'p-5 text-center align-text'>___</p>
            <h3> follow this link back to our site</h3>
              <h2> <Link to ='/'>Bakery</Link></h2>
              

          </div>

        </div>
        
      </div>
    )
  }
}