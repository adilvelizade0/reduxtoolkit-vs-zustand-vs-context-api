import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../pages/_app";

function Context() {
  let { increment, decrement, reset } = useContext(AppContext);
  const [count, setCount] = React.useState(0);

  return (
    <div className="container py-5">
      <h1>Context</h1>
      <hr />
      <div className="container">
        <h3 className="mb-3">Count: {count} </h3>
        <button
          className="btn btn-danger me-2"
          onClick={() => {
            setCount(decrement());
          }}
        >
          decrement
        </button>
        <button
          className="btn btn-success me-2"
          onClick={() => {
            setCount(increment());
          }}
        >
          increment
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(reset());
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Context;
