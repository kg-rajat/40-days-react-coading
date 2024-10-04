import React, { useState } from 'react';
const Order = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const con = (event) => {
    event.preventDefault();
    alert("Your form has been submitted");

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        flexDirection: 'column' 
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Enter Your Details</h2>
        <form style={{ width: '480px' }} onSubmit={con}>
          <div className="mt-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Full Name" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
            />
          </div>
          <br/>
          <div className="mt-3">
            <input 
              type="email" 
              className="form-control" 
              placeholder="Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <br/>
          <div className="mt-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your phone number" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
          <br/>
          <div className="mt-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your Address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Order;
