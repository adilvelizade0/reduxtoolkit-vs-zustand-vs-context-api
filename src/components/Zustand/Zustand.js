import React from "react";
import useStore from "../../zustand/counter.zustand";

function Zustand() {
  const { count, increment, decrement, reset } = useStore();
  return (
    <div className="container py-5">
      <h1>Zustand</h1>
      <hr />
      <div className="container">
        <h3 className="mb-3">Count: {count} </h3>
        <button className="btn btn-danger me-2" onClick={decrement}>
          decrement
        </button>
        <button className="btn btn-success me-2" onClick={increment}>
          increment
        </button>
        <button className="btn btn-primary" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default Zustand;
