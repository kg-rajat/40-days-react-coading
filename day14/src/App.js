import React, { useState } from 'react';
import Todolist from './Todolist';

const App = (props) => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
     setInputList(event.target.value);
  };
   const listOfItems = () =>{
     setItems ((oldItems) =>{
       return [...oldItems, inputList];
     });
     setInputList('');
     };
     const deleteItems = (id) => {
      console.log('deletedItems');

      setItems((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
          return index !== id;

        });
      });
    };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          
          <h1>Todo List</h1>
          
          <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList}/>
          <button onClick={listOfItems}> + </button>

          <ol>
             <li>{inputList}</li>
            {Items.map( (itemval, index) =>{
             return <Todolist key={index} id={index} text={itemval} onSelect={props.deleteItems}/>
            } )}
          </ol>
        </div>

      </div>
    </>
  )
}

export default App;
