import { useState ,memo} from "react";
import { StrictMode } from "react";
import Content from "./Content";
import "./App.css";
import ContentMemo from "./ContentMemo";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props


function App() {
  //Content.js
  // const [show , setShow] = useState(false)

  //Memo
  const [count,setCount ] = useState(0)
  const [count2,setCount2 ] = useState(0)
  
  const increase = () => {
    setCount(count + 1)
  }

  const increase2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <StrictMode>
      <div className="App">
    < ContentMemo count = {count}/>
      <h1>{count}</h1>
      <h1>{count2}</h1>

      <button onClick={increase}>Click me!</button>
      <button onClick={increase2}>Click me 2!</button>




      {/* <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />} */}

      </div>
    </StrictMode>
  );
}

export default App;
