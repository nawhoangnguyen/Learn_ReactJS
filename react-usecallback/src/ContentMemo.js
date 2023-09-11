import { memo, useState } from "react";
function ContentMemo({ onIncrease }) {
    console.log("Re-render");
  return (
    <div>
      <h1>Hello Anh EM !! </h1>
        
      <button onClick={onIncrease}>Increase !</button>
    </div>
  );
}
export default memo(ContentMemo);
