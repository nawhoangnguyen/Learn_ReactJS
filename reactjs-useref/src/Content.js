import { useState, useRef ,useEffect} from "react";

//để thay đổi giá trị count thì phải để biến let bên ngoài tránh hàm Content re-render làm mất  id của thằng setInterval từ đó mới có thể bấm stop đồng hồ được
//Thay vì vậy thì dùng useRef
function Content() {
  const [time, setTime] = useState(60);

  const timerId = useRef();
  const prevCount = useRef()
  const h1Ref = useRef()


  const handleStart = () => {
    timerId.current = setInterval(() => {
    setTime(prevStart => prevStart - 1);
    }, 1000);
  
    console.log("Start =>", timerId.current);
  
  };

  useEffect(() => {
    prevCount.current = time
  },[time])//count thay đổi thì gọi lại cachh back này

useEffect(() => {
  const rect = h1Ref.current.getBoundingClientRect()
  console.log(rect);
})

  const handleStop = () => {  

    clearInterval(timerId.current)

    console.log("Stop =>", timerId.current);

  };
  console.log(time , prevCount.current);
  return (
    <div>
      <h1 ref={h1Ref}>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content;
