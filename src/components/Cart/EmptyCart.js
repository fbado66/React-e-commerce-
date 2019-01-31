import React from 'react';

export default function EmptyCart() {
  return (
    <div>
      <div className = 'container mt-5'>
        <div className = 'row'>
          <div className = 'col-10 mx-auto text-center text-heading'>
            <h1 className = 'text-capitalize'> <strong>cart currently empty</strong></h1>
          </div>
        </div>
      </div>
      <div id='padding-empty-cart' className="col-9 mx-auto col-md-6 col-lg-3 my-5" />
    </div>
  )
}