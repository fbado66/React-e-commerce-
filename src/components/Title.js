import React from 'react';

export default function Title({name, title}) {
  return (
    <div className='row'>
      <div className='col-10 mx-auto my-2 text-center'>
      <span className = 'number-of-title'>{name}</span>
        <span className='text-capitalize font-weight-bold text-heading'>
           <strong className='text-blue'>{title}</strong>
        </span>
      </div>
    </div>
  )
}