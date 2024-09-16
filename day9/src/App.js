import React from 'react';
import Card from './Card';
import "./index.css";
import Sdata from './Sdata';

export default function App() {
  function ncard(val){
    return(
    <Card 
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title} 
      sname ={val.sname}
      link={val.links}/>
    )

  }
  return (
    <>

      <h1 className="heading_style" > List of top 6 Netflix Series in 2024</h1>
            {Sdata.map(ncard)}
</>
  )
}
