import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";
import { StrictMode, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <StrictMode>
        
        <button onClick={() => setShow(!show)}>show</button>
        {show && <Content />}
        
      </StrictMode>
    </div>
  );
}

export default App;
