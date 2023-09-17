import "./App.css";
import Content from "./Content";
import {ThemeContext} from './ThemeContext'
import './App.css'
import { useContext } from "react";

//Context
//CompA => CompB => CompC

//Theme: Dark / Light
//1. Create context
//2. Provider
//3. Consumer


function App() {
  const context = useContext(ThemeContext)

  return (
    
    <div className="App">
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content  />
    </div>
    
    
  );
}

export default App;
