import React, { useState } from 'react';

const Emi = () => {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');
  
  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "principal") {
      setPrincipal(value); 
    } else if (name === "interest") {
      setInterest(value); 
    } else if (name === "year") {
      setYear(value); 
    }
  };
  
  const calculateEMI = () =>{
    // emi = p(r(1+r)^n/((1-r)^n)-1));
    let r = interest;
    if (principal && interest && year){
      r= r / 12/ 100;
      let powerCal = Math.pow(1+r,year*12);
      let emi = principal*((r*powerCal) / (powerCal-1))
      setResult(Math.round(emi))
    }
  }

  return (
    <div className="container">
      <h1>EMI Calculator</h1>
      <div>
        <p>Enter Amount</p>
        <input 
          type="text" 
          placeholder="Amount" 
          onChange={handleInput} 
          name="principal" 
          value={principal} />
        
        <p>Enter Interest</p>
        <input 
          type="text" 
          placeholder="Interest" 
          onChange={handleInput} 
          name="interest" 
          value={interest} />
        
        <p>Enter Year's</p>
        <input 
          type="text" 
          placeholder="Year" 
          onChange={handleInput} 
          name="year" 
          value={year} />
        
      </div>
      <button onClick={calculateEMI}>Calculate</button>
      <div className="result">
        <p>Your EMI is: {result} </p>
      </div>
    </div>
  );
}
export default Emi;





