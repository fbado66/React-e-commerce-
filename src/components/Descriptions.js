import React, {Component} from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Descriptions extends Component {
  render() {
    return (
      <ProductConsumer>
        { value => {
          const {id, info, img, price, title, inCart} = value.descriptionProduct;
          return (
          <div className="container py-5">
            {/*title */}
            <div className = 'row'>
              <div className='col-10 mx-auto text-center text-slanted my-5'>
                <h1>{title}</h1>
              </div>
            </div>
            {/* title ends  */}

            {/* product  */}
            <div className = 'row'>
              <div className = 'col-10 mx-auto col-md-6 my-3'>
                <img src={img} className = 'img-fluid' alt = 'product'/>
              </div>
              
              <div className = 'col-10 mx-auto col-md-6 my-3 text-capitalize'>
                <h3>Title: {title}</h3>
                <h4 className ='text-title text-uppercase text-muted mt-3
                 mb-2'>
                 Info :<span className='text-center'>{info}</span>  </h4>
                 <h5>
                   <strong> price : $ </strong>
                   {price}
                 </h5>
                 <h5>ingredients: </h5>
                 {/* buttons  */}
                 <div>
                   <Link to = '/'>
                      <ButtonContainer>back to Products 
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer disabled = {inCart ? true : false}
                    onClick = {() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }} >
                    
                      {inCart? "in Cart" : "add to cart"}
                    </ButtonContainer>

                 </div>

              </div>
            </div>
          </div>
          )
        }}
      </ProductConsumer>
    )
  }
}