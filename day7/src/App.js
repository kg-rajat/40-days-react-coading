// import React from 'react'

// export default function App() {
//   const fname = "Rajat";
//   const lname = "saraswat";
//   return (
//     <div>
//       <h1> my name is {fname} {lname}</h1>
//        <h2> My name is {fname+" "+lname}</h2>
//       <h3> My name is {`${fname} ${lname}`}</h3>
//       <p>My number is { 3+ 4}</p>
//     </div>
//   )
// }

import React from 'react'

export default function App() {
  const fname="rjt"
  const lname="saraswat"
  const currDate= new Date().toLocaleDateString();
  const currTime= new Date().toLocaleTimeString();
  return (
    <div>
      <h1>Hello My name is {fname}</h1>
      <h2> My last name is {lname}</h2>
      <h3>Date is {currDate}</h3>
      <h3>Time is {currTime}</h3>

    </div>
  )
}
