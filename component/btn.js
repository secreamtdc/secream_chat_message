import React from 'react'
import axios from 'axios';

export default (props) => {
  const { persons2 } = props

  
// const pushData = () => {
//     axios.get(`http://www.mocky.io/v2/5c57e92b2f00000c14856b54`)
//     .then(res => {
//       const persons = res.data.data;
//       this.props.push(persons);
      
//     })
// }

  return (
    <div>
        <br/>
        <style jsx>{`
button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}`} </style>
     <button onClick = {persons2}>
         Push
     </button> 
     <br/><br/>

     </div>
  )
}