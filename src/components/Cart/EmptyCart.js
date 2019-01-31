import React from 'react';

export default function EmptyCart() {
  return (
    <div>
      <div className = 'container mt-5' />
      <span id='empty-cart'><h4>CART EMPTY</h4></span>
      <div id='padding-empty-cart' className="col-9 mx-auto col-md-6 col-lg-3 my-5" />
    </div>
  )
}