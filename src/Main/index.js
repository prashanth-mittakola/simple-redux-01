import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store";

const Task = () => {
  const [val,setVal] = useState("");
  const counter = useSelector(store=>store.counter);
  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch(actions.increment)
  }
  const decrement = () => {
    dispatch(actions.decrement)
  }
  const addBy10 = () => {
    dispatch(actions.addBy10)
  }
  const decrementBy = (val) => {
    dispatch(actions.decrementBy(val))
  }
  const addBy = (val) => {
    dispatch(actions.addBy(val))
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
