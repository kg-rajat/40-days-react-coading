import React, { Component } from 'react'


export class Classcomponent extends Component {
  heading="My first react page"
  render() {
    return (
      <div style={{ textAlign:"center"}}>
        <h1 style={{color: "red",textAlign:"center"}}>{this.heading}</h1>
        <h2 style={{color:"DodgerBlue"}}>Akshay Kumar</h2>
        <p>Akshay Hari Om Bhatia (born Rajiv Hari Om Bhatia; 9 September 1967, known professionally as Akshay Kumar (pronounced), is an Indian actor and film producer working in Hindi cinema.</p>
        
        <p>Referred to in the media as "Khiladi Kumar" through his career spanning over 30 years, Kumar has appeared in over 100 films and has won several awards, including one National Film Award and two Filmfare Awards. He received the Padma Shri, India's fourth-highest civilian honour, from the Government of India in 2009.</p>

        <h1>30 days of react coading</h1>
        <h2>Rajat</h2>
        <h3>Saraswat</h3>
        <h4>Short name - rjt</h4>
        <h5>I m completed 30 days react coading</h5>
        <h6>Hello world!</h6>

        
      </div>
    )
  }
}

export default Classcomponent
