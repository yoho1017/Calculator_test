import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter.js';


function App() {
  let Arr=[];
  const click=(e)=>{
    const val= e.target.value;
    // Arr.push(val).join('');
    Arr.push(val);
    let num = Arr.join('');

    console.log(num);
    document.querySelector('input[type="text"]').value=num;   
  };

  // const that=this;
  const [count , setCount] = useState(0);
  
  function clear(){
    document.querySelector('input[type="text"]').value='';
  }

  function Add() {
   let inputValue= Number(document.querySelector('input[type="text"]').value);
   setCount(count +inputValue);

   useEffect(()=>{
    document.querySelector('input[type="text"]').value=count;
   })
  //  clear();
  //  await (function(){
  //   return new Promise(res=>{
  //         document.querySelector('input[type="text"]').value=count;
  //         console.log(count);
  //         res()
  //       })
  //   })()


  //  console.log(setCount(count +inputValue));
 }

 function Minus() {
  let inputValue=Number(document.querySelector('input[type="text"]').value);
  setCount(count - inputValue);
  // clear();
  // document.querySelector('input[type="text"]').value=count; 

  console.log(count);
}

function Total(){
  setCount(Number(document.querySelector('input[type="text"]').value));
}


  return (
    <div className="App">     
      <p>{count}</p>
      <input type="text" placeholder='0' onChange={Total} disabled/>
      <button onClick={Add}>+</button>
      <button onClick={Minus}>-</button>
      <Counter onClick={click}/>
      {/* <div>
        <button style={{color:'red'}} value='1' onClick={click}>1</button>
        <button style={{color:'red'}} value='2' onClick={click}>2</button>
        <button style={{color:'red'}} value='3' onClick={click}>3</button>
        <button style={{color:'red'}} value='4' onClick={click}>4</button>
        <button style={{color:'red'}} value='5' onClick={click}>5</button>
        <button style={{color:'red'}} value='6' onClick={click}>6</button>
        <button style={{color:'red'}} value='7' onClick={click}>7</button>
        <button style={{color:'red'}} value='8' onClick={click}>8</button>
        <button style={{color:'red'}} value='9' onClick={click}>9</button>
        <button style={{color:'red'}} value='0' onClick={click}>0</button>
      </div> */}
    </div>
  );
}

export default App;
