 /*import React, { useState } from "react";

 const App =() => {
 const state = useState();
   //console.log(state);

   const [count, setCount] = useState(0);

const IncNum = () => {
   setCount(count + 1);
  //console.log("clicked" + count++);
};
const DecNum = () => {
  setCount(count - 1);
};
   return (
     <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Inc Num</button>
        <button onClick={DecNum}>Dec Num</button>
     </>
   );
  
 };

 export default App;  */





 /* Get the Current Time ,When You clicked on Button. */


 /*import React, { useState } from 'react';

const App = () => {

  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
     newTime = new Date().toLocaleTimeString();
     setCtime(newTime);

  };

  return (
    <>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>Get time</button>
    </>

  );

}
export default App;*/

 import Demo from './Demo'

import React from 'react'

const App = () => {
  return (
    <div>
      <Demo/>
    </div>
  )
}

export default App


 





