import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "../../store/slices/ShowSlice";
const Subchild1 = (props) => {
  const dispatch = useDispatch()
  const data = useSelector((c) => {
    return c.show.value;
  });

  return (
    <>
      <div>Subchild1 - {data} </div>
      <button type="button" onClick={()=>{dispatch(increment())}}>click me</button>
      <button type="button" onClick={()=>{dispatch(incrementByValue(10))}}>incrementByValue</button>
    </>
  );
};

export default Subchild1;
