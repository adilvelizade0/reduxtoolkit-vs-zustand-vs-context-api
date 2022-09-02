import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/slicers/counterSlice";

function ReduxTool() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { value } = counter;
  return (
    <div className="container py-5">
      <h1>Redux Toolkit</h1>
      <hr />
      <div className="container">
        <h3 className="mb-3">Count: {value} </h3>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          className="btn btn-success me-2"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button className="btn btn-primary" onClick={() => dispatch(reset())}>
          reset
        </button>
      </div>
    </div>
  );
}

export default ReduxTool;
