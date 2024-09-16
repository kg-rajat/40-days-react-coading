import React from 'react'
import { ReactDOM } from 'react-dom';

export default function Card(props) {
  function Card(props) {
    // console.log(props);
  }
  return (
    <div>
      <div className="cards">
     <div className="card">
       <img src={props.imgsrc} alt="myPic" className="card_img"/>
       <div className="card_info">
         <span className="card_category"> {props.title} </span>
         <h3 className="card_title">{props.sname}</h3>
         <a href={props.link} target="_blank">
          <button>Watch now</button>
          </a>
       </div>
     </div>
      
    </div>
    </div>
  )
}

