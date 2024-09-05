import React from 'react';

const Contact = () => {
  return (
    <>
   <div className="my-3">
     <h1 className="text-center">Contact Us</h1>
   </div>
    <div className="container contact_div">
       <div className="row">
         <div className="col-md-6 col-10 max-auto">
           <div className="">
           <form>
           <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label">Full name:</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
             <label for="exampleFormControlInput1" class="form-label">Phone number:</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter 10 Digit number " /> 
             <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter you valid Email" />
            </div>
          <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
           </div>
           </form>
           </div>
         </div>
       </div>
    </div>
    </>
  
  );
};

export default Contact;
