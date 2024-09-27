import React, { useState } from 'react'
import { questions } from './Api'
import "./accordion.css";
import Myaccordion from './Myaccordion';

const Accordion = () => {
   const [data, setData] = useState(questions);
  return (
    <>
    <section className="main-div">
      <h1> ⁑ React Question ⁑</h1>
      {
        data.map((curElem) => {
          const { id } = curElem;
          return <Myaccordion key={id} {...curElem}/>
        })
      }
      </section>
    </>
  )
}

export default Accordion
