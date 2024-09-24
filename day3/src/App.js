import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Textfom from './components/Textfom';
import Alert from './components/Alert';


const App = () => {
  const [mode, setMode] = useState("light"); // darkmode is enabled or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000);
  }
     const toggleMode = () =>{
       if(mode === 'light'){
         setMode('dark')
         document.body.style.backgroundColor = 'gray';
         showAlert("dark mode has been enabled", "Success"); 
       }
       else{
         setMode('light')
         document.body.style.backgroundColor = 'white';
         showAlert("light mode has been enabled", "Success");
       }
     }
     
     
  return (
    <div>
   <Router>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <Routes>
       <Route exact path="/" element={<Textfom heading="Text Converter" showAlert={showAlert} mode={mode}/>}/>
       <Route exact path="about" element={<About heading="About Page"/>}/>
     </Routes>
   </Router>
      
    </div>
  );
};

export default App;
