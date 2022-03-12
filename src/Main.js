import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

const Task = () => {
  const [val,setVal] = useState("");
  const counter = useSelector((store)=>{
    const {counter} = store;
    return counter
  });
  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch({type:"INC"})
  }
  const decrement = () => {
    dispatch({type:"DEC"})
  }
  const addBy10 = () => {
    dispatch({type:"ADD_BY_10",payload:10})
  }
  const decrementBy = (val) => {
    dispatch({type:"DEC_BY",payload:val*1})
  }
  const addBy = (val) => {
    dispatch({type:"ADD_BY",payload:val*1})
  }
  return (
    <>
      <h3>Counter</h3>
      <h1>{counter}</h1>
      <button onClick={()=>increment()}>Increment</button>
      <br/>
      <button onClick={()=>decrement()}>Decrement</button>
      <br/>
      <button onClick={()=>addBy10()}>Add By 10</button>
      <br/>
      <button onClick={()=>decrementBy(val)}>Decrement By </button>
      <input type="number" value={val} onChange={(e)=>setVal(e.target.value)} />
      <button onClick={()=>addBy(val)}>Add By </button>
      <br/>
    </>
  )
}
export default Task;
