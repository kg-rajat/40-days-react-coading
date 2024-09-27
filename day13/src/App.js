import React, { useState } from "react";

const App = () =>{

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
  });

  const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);
    
    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;
    
    setFullName((preValue) =>{
      //console.log(preValue);
         return {
           ...preValue,
           [name] : value,
         }


      // if(name === "fName"){
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email:preValue.email,
      //     phone:preValue.phone,
      //   };
      // } else if(name === "lName"){
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email:preValue.email,
      //     phone:preValue.phone,
      //   }; 
      // }else if(name === "email"){
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email:value,
      //     phone:preValue.phone,
      //   }; 
      // }else if(name === "phone"){
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email:preValue.email,
      //     phone:value,
      //   }; 
      // }
    });


 };
  const onSubmits =  (event) =>{
    event.preventDefault();
    alert('Congratulation,🎉 your form has been completed');
  };
  
  return(
    <>
    <div className="main_div">
     <form onSubmit={onSubmits}>
     <div>
       <h1>🙏  welcome {fullName.fname} {fullName.lname}</h1>
       <p> {fullName.email} </p>
       <p> {fullName.phone} </p>
       <h4>{fullName.qua}</h4>
       <input type="text" placeholder="Enter your name" name='fname' value={fullName.fname} onChange={inputEvent} />
       <input type="text" placeholder="Enter your Last name" name='lname' value={fullName.lname} onChange={inputEvent} />
       <input type="text" placeholder="Enter your email" name='email' value={fullName.email} onChange={inputEvent} />
       <input type="text" placeholder="Enter your phone" name='phone' value={fullName.phone} onChange={inputEvent} />
       <input type="text" placeholder="Enter your qualifucation" name='qua' value={fullName.qua} onChange={inputEvent} />
       <button type="submit">Submit 👍✌️</button>
     </div>
    </form>
     </div>
    </>
  );
};

export default App;