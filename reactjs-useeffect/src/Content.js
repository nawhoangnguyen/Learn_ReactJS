import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  // 1. useEffect(callback)
  //   -> Gọi callback mỗi khi component rerender mounted
  //   -> Gọi callback sau khi component thêm element vào DOM

  // 2. useEffect(callback,[])
  //   -> Chỉ gọi callback mỗi khi component mounted

  // 3. useEffect(callback,[deps])
  //   -> Callback sẽ được gọi lại mỗi khi deps thay dổi

  //   ---------------------------------------------------
  // 1. useEffect(callback): Callback luôn được gọi sau khi component mounted
  // 2.Cleanup function luôn được gọi trước khi component unmounted
  //   ---------------------------------------------------

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoTop, setGoTop] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  /*
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);  setState ở đây sẽ phải rerender nguyên Component là thằng f Content() => gọi lại cái callback của useEffect 
      });                 => xong call API = setState => xong rerender lại content() => vòng lặp vô hạn
  } /*=> Phải dùng trương hợp 2);
  Component luôn được gọi khi
  */

  // 2. useEffect(callback,[]): Chỉ gọi callback mỗi khi component mounted

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((posts) => {
  //       setPosts(posts); // setState ở đây sẽ phải rerender nguyên Component là thằng f Content() => gọi lại cái callback của useEffect
  //     });                // => xong call API = setState => xong rerender lại content() => vòng lặp vô hạn
  // }, [] /*=> Phải dùng thêm cái dấu này [] để gọi lại chỉ 1 lần thôi ko thì sẽ mounted hoài rerender hoài );*/

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts); // setState ở đây sẽ phải rerender nguyên Component là thằng f Content() => gọi lại cái callback của useEffect
      });
  }, [type]);

  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll); // tạo một cái component để lắng nghe hành vi cuộn ở màn hình window
    console.log("addEnventListener");

    //Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll); // remove một cái component để lắng nghe hành vi cuộn ở màn hình window
      console.log("removeEnventListener");
    };
  }, []);




  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setGoTop(true); //Khi cuộn xuống khôn render lại component trừ khi sử dụng phép so sánh ===
    } else {
      setGoTop(false);
    }
  };
  
  useEffect(()=>{
    const handleWindowSize = () => {
      
      setWindowSize(window.innerWidth) //Se khong co re-render

    //Cleanup function
      return () => {
        window.removeEventListener('resize', handleWindowSize) // remove một cái component để lắng nghe hành vi cuộn ở màn hình window
      }

      
    }

    window.addEventListener('resize',handleWindowSize)


  },[])
  

  return (
    <div>

      <h1>window Size: {windowSize}</h1>

      {tabs.map((tab, index) => (
        <button
          key={index}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title || post.name}</li>
        ))}
      </ul>

      {showGoTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}

    </div>
  );
}

export default Content;
