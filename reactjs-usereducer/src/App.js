import logo from "./logo.svg";
import "./App.css";
import { useState, useReducer } from "react";

// useState
// 1. Init state: 0
// 2. Actions : Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Reducer: cách hoạt động nhận đầu vào và trả ra đầu ra mới
// cái state sẽ ban đầu khi khởi động dự án sẽ được khởi tạo bởi initState
// và cái action sẽ nhận vào  UP_ACTION hoặc DOWN_ACTION => trả về một cái state mới
const reducer = (state, action) => {
  console.log("reducer running..");

  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("INVALID ACTION");
  }
};

function App() {
  // useReducer là một hàm nhận đến 3 đối số => đối số 1: reducer ,=> đối số 2: initState
  const [count /* giá trị khởi tạo count = 0 */, dispatch] = useReducer(
    reducer,
    initState /* nhận giá trị khởi tạo và trả về một array */
  );

  const handleDecrease = () => {
    dispatch(DOWN_ACTION);
  };

  const handleIncrease = () => {
    dispatch(UP_ACTION);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Up</button>
      <button onClick={handleDecrease}>Down</button>
    </div>
  );
}

export default App;
