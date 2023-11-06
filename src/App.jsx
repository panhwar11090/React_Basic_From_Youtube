import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15); // [0, function
  
   const addValue = () => {
      counter = counter + 1;
      setCounter(counter);
      console.log(counter)
   }

   const decValue = () => {
      if(counter > 0){
        counter = counter-1;
        setCounter(counter)
      }else{
        setCounter(0);
      }
   }
  return (
    <>
      <h1>chai or CODE</h1>
      <h1>Counter {counter} </h1>
      <button onClick={addValue}>Add counter {counter}</button>
      <button onClick={decValue}>Decrease Counter {counter}</button> 
    </>
  )
}

export default App
