import React, { useState } from 'react';

const Demo = () => {
  const [num, setNum]= useState(0);

  const incNum = () => {
     if (num < 50) {
     setNum(num+1);
     }else {
       setNum (50);
       alert('sorry, 50 limit is max limit')
     }
   }
   const decNum = () => {
     if (num > 0) {
     setNum(num-1);
   }else {
     setNum(0);
     alert('sorry, Zero limit reached');
   }
 };
   return (
     <>
       <div className="main_div">
         <div className="center_div">
           <br/>
           <h1> {num} </h1>
           <div className="btn_div">
             <button onClick={incNum}>Increm</button>
             <button onClick={decNum}>Decrem</button>
           </div>
         </div>
       </div>
    </>
   );
 };

 export default Demo; 


