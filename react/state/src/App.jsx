
import { useState } from 'react';
import './App.css'

function App() {
// variable , method/function
  const [counter, setCounter] =useState (10);

  const addValue = ()=>{
    // It's not going to work beacuse of react bandaling 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // If we want somting like this we can use the call back method -->> the call back function ensure the value returing 
    setCounter((counter)=>counter+1);
    setCounter((counter)=>counter+1);
  }
  const removeValue = ()=>{
    setCounter(counter - 1);
  }

  return (
<>
<h1>I am here: {counter}</h1>
<p>Counter Value: {counter}</p>
<button onClick={addValue}>Add Value</button> {" "}
<button onClick={removeValue}>remove Value</button> {" "}

<footer>footer : {counter}</footer>
</>
  )
}

export default App
