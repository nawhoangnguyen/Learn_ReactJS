import { useEffect, useState } from "react";
// 1. useEffect(callback)
//   -> Gọi callback mỗi khi component rerender mounted
//   -> Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback,[])
//   -> Chỉ gọi callback mỗi khi component mounted

// 3. useEffect(callback,[deps])
//   -> Callback sẽ được gọi lại mỗi khi deps thay dổi

//   ---------------------------------------------------
// 1. useEffect(callback): Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
//   ---------------------------------------------------

function Content() {
  // Countdơn app
  const [countdown, setCountdown] = useState(200);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCountdown((prevCountdown) => prevCountdown - 1);
  //   }, 1000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);

  //  Change image app

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };

  return (
    <div>
      <input type="file"  onChange={handlePreviewAvatar} />
      {avatar && (<img src={avatar.preview} width="80%"></img>)}
    </div>
  );
}

export default Content;
