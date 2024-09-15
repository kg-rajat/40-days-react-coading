import React from 'react';

const SlotM =(props) => {


  // let x = '😀';
  // let y = '😀';
  // let z = '😨';

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  let {x, y, z} = props;


  if  ((x===y) && (y===z)) {
    return(
      <>
        <div style={{textAlign:"center"}}>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching.</h1>
          <hr/>
        </div>  
      </>
    );
  } else{
    return(
      <>
        <div style={{textAlign:"center"}}>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is not Matching.</h1>
          <hr/>
        </div>  
      </>
    );

  }
};

export default SlotM;