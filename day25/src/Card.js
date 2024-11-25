import React from 'react';
import "./index.css"

const Card = (props) => {
  return (
    <>
      <div className='card'>
        <img src={props.img} alt="" />
        <h3>Nature {props.title} Image</h3>
        {/* <button>click me</button> */}
        <button>Click me</button>
      </div>
    </>
  )
}

export default Card;
