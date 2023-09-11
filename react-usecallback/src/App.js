import { useState, memo,useCallback } from "react";
import { StrictMode } from "react";

import "./App.css";
import ContentMemo from "./ContentMemo";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props



//Sử dụng useCallback khi component con có sử dụng memo và truyền prop 
//khi sử dụng useCallback thì component con ko bị rerender lại hoài tránh trường hợp rerender không cần thiêt, performance hông đc tốt
//nếu ko thằng component con ko có dùng memo thì đ cần dùng useCallback làm cl gì cả dư thừa vãi l
function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  },[])

  return (
    <StrictMode>
      <div className="App">
        <ContentMemo onIncrease={handleIncrease} />
        <h1>{count}</h1>
      </div>
    </StrictMode>
  );
}

export default App;
