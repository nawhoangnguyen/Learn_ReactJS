import { memo } from "react";
function ContentMemo ({count} ) {
    return(
        <div>
            <h1>Hello Anh EM !! = {count}</h1>
        </div>
    )
    
}
export default memo(ContentMemo)