import React from 'react'

export default function CartColumns() {
  return (
    <div id ='cart-container' className = 'container-fluid text-center d-none d-lg-block'>
      <div className = 'row'>
        <div className = 'col-10 mx-auto col-lg-2'>
          <p className = 'text-total text-capitalize'> Products
          </p>
        </div>
        <div className = 'col-10 mx-auto col-lg-2'>
          <p className = 'text-total text-capitalize'> Name
          </p>
        </div>
        <div className = 'col-10 mx-auto col-lg-2'>
          <p className = 'text-total text-capitalize'> price
          </p>
        </div>
        <div className = 'col-10 mx-auto col-lg-2'>
          <p className = 'text-total text-capitalize'> quantity
          </p>
        </div>
        <div className = 'col-10 mx-auto col-lg-2'>
          <p className = 'text-total text-capitalize'> remove
          </p>
        </div>
        <div className = 'col-10 mx-auto col-lg-2'>
          <p className = 'text-total text-capitalize'> selection
          </p>
        </div>
      </div>
    </div>
  )
}