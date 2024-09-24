import React, { useState } from 'react'

const About = (props) => {
  const [myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btntext, setBtnText] = useState("Enable Dark Mode")
  
  const toggleStyle = () =>{
      if(myStyle.color === 'black'){
        setMyStyle({
          color:'white',
          backgroundColor:'black'
        })
        setBtnText("Enable Light Mode")
      }
      else {
        setMyStyle({
          color:'black',
          backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode");
      }
  }
  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="heading my-5">{props.heading}</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Lorem1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit non voluptatum pariatur necessitatibus odit repudiandae natus, optio suscipit distinctio unde, fugiat eveniet quod possimus quisquam, illo enim! Alias quod modi delectus accusamus praesentium hic dicta minima sint, repellat quo natus necessitatibus molestiae provident officiis vitae magni porro omnis sapiente fuga id voluptas vero animi voluptate consequatur. Explicabo reiciendis quaerat modi tenetur recusandae! Repudiandae quod obcaecati architecto tempore aut, quaerat qui, quae nesciunt dolor similique ipsam eaque molestias commodi. Voluptatum quisquam mollitia quas earum non odio veritatis reprehenderit officia aut, cumque fuga ex suscipit, repudiandae ipsa labore? Mollitia, quos repudiandae accusamus tenetur aut labore recusandae quam ea? Officia, consectetur est. Eius explicabo inventore id natus vel pariatur! Necessitatibus eveniet sequi, neque unde laudantium inventore doloremque asperiores hic. Assumenda ut officiis nisi eaque? Nostrum perspiciatis voluptates culpa eos facere explicabo facilis harum saepe at necessitatibus? Veniam ipsa accusantium, earum recusandae excepturi debitis.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Lorem2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid doloribus magnam consectetur maiores dolorem amet harum recusandae omnis. Eligendi inventore explicabo, dolorum necessitatibus ducimus laudantium nesciunt tenetur vero delectus nobis omnis atque accusamus. Fugit pariatur id natus aperiam praesentium. Facilis et sapiente architecto exercitationem assumenda aut voluptas accusamus iusto fugit consequuntur voluptatibus totam perferendis a, illum quas? Voluptatem, obcaecati necessitatibus quis deserunt architecto saepe magni beatae rem veniam aut culpa repellendus facilis nostrum voluptate quae dolor impedit atque quod ipsa praesentium laborum, ex consequatur animi ut. Iure mollitia modi unde voluptatum aperiam corrupti est incidunt similique nesciunt, voluptate aut, reiciendis, numquam dolorem exercitationem? Dignissimos et iure itaque, accusamus numquam doloremque. Architecto ab vel modi, sapiente quaerat iste dolorum magnam commodi! Harum, assumenda sed? Cum recusandae necessitatibus excepturi doloremque dolor, temporibus maxime iste porro obcaecati animi, quis eveniet consequatur aliquid.</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Lorem
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam inventore, impedit accusantium deserunt dolores fuga earum neque hic tenetur debitis odio alias ab vero incidunt quo minima magni magnam error quod sapiente ipsum animi. Quasi vero voluptatum neque facere sequi porro, mollitia beatae nam, ipsum commodi perferendis ab placeat autem amet id magni cum eveniet ea ut accusantium! Consectetur, deleniti iusto dolore fuga nisi sequi. Laborum molestiae saepe commodi mollitia, minus aspernatur reiciendis. Voluptates officia explicabo veniam ducimus provident at totam libero minus doloribus recusandae animi corrupti quae quasi, ipsam laborum sapiente modi similique? Reprehenderit voluptates, deleniti nesciunt qui in ullam, totam possimus pariatur recusandae soluta voluptatum itaque sit molestiae. Itaque laudantium asperiores cum ex rerum a quos. Aspernatur tenetur ratione culpa harum, incidunt quibusdam? Dolores magnam ipsum, laboriosam assumenda dicta voluptatem cupiditate voluptatibus quibusdam architecto aspernatur illum consequuntur inventore modi illo deserunt praesentium ex enim blanditiis dolore ullam fugit repellendus sapiente vero est. Numquam sint non odio autem?</div>
    </div>
  </div>
</div>
    {/* darkmode button  */}
{/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary " >{btntext}</button>
    </div>
     */}
    </div>
    
  );
};

export default About;
