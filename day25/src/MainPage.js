import Card from './Card';
import img1 from "./images/m1.webp"
import img2 from "./images/m2.webp"
import img3 from "./images/m3.webp"
import img4 from "./images/m4.jpg"
import img5 from "./images/m5.webp"
import img6 from "./images/m6.jpg"
import img7 from "./images/m7.webp"
import img8 from "./images/m8.jpg"
 import img9 from "./images/m9.webp"
import img10 from "./images/m10.jpg"
import img11 from "./images/m11.jpg"
import img12 from "./images/m12.webp"
import img13 from "./images/m13.webp"



const MainPage = () => {
  return (
    <>
      <h1 className='heading'>Card Gallery</h1>
      <div className='cardcomp'>
        <Card title="1" img={img1}/>
        <Card title="2" img={img2}/>
        <Card title="3" img={img3}/>
        <Card title="4" img={img4}/>
        <Card title="5" img={img5}/>
        <Card title="6" img={img6}/>
        <Card title="7" img={img7}/>
        <Card title="8" img={img8}/>
        <Card title="9" img={img9}/>
        <Card title="10" img={img10}/>
        <Card title="11" img={img11}/>
        <Card title="12" img={img12}/>
        <Card title="13" img={img13}/>
        
      </div>
     

    </>
  )
}

export default MainPage;
