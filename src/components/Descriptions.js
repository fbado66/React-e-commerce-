import React, {Component} from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Descriptions extends Component {
  render() {
    return (
      <ProductConsumer >
        { value => {
          const {id, info, img, price, ingredients, title, inCart} = value.descriptionProduct;
          return (
          <div id='product-description' className="container py-5">
            {/*title */}
            <div className = 'row'>
              <div className='col-10 mx-auto text-center'>
                <h1>{title}</h1>
              </div>
            </div>
            {/* title ends  */}

            {/* product  */}
            <div className = 'row'>
              <div className = 'col-10 mx-auto col-md-6 my-3'>
                <img src={img} className = 'img-fluid' alt = 'product'/>
              </div>
              
              <div className = 'col-10 mx-auto col-md-6 my-4'>
                <h5><span className='text-center'>{info}</span></h5>
                <p><strong> Price : $ </strong>
                   {price}</p>
                
                 
                 <p className = 'text-ingredients'><strong>Ingredients: </strong>
                  {ingredients} </p>
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