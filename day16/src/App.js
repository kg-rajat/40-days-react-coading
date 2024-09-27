import React from 'react';
import Header from './components/Header';
import background from "./assets/background.mp4";
import Text from './components/Text';

export default function App() {
  return (
    <div>
      <video autoPlay muted className="absolute h-full w-full object-cover -z-10 top-0 left-0" src={background}></video>
      <div className="absolute -z-[5] top-0 left-0 h-full w-full bg-[rgb(0,0,0,0.5)]"></div>
      <Header/>
      <Text/>
    </div>
  )
}


