import React, { useState } from 'react';
import "./accordion.css";

const Myaccordion = ({question, answer}) => {
  const [show, setShow] = useState(false);
  return (
    <>
     <div className="main-heading">
       {/* <p className="sing" onClick={() => setShow(!show)}>{show? "-" :  "+"}</p> */}
        <button className="sing" onClick={() => setShow(!show)}>{show? "-" :  "+"}</button> 
       <h3>{question}</h3>
     </div>
     { show && <p className="answer-div">{answer}</p> }

    </>
  );
};

export default Myaccordion;
