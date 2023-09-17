import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
//Thư viện React router dùng để chuyển hướng các trang trong nội bộ
//Routes giống như container chứa các Route
// Link dùng để chuyển trang mà ko cần tải lại method => to = ''
function App() {
  return (
    <div className="App">
      {/* <Button/>

      <Button primary/>

      <Button primary disabled/> */}
  
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
