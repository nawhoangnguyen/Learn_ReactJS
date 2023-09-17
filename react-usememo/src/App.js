import logo from './logo.svg';
import './App.css';
import { useState,useMemo } from 'react';

function App() {
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [products,setProducts] = useState([])

  const total =useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('tính toán lại')
      return result + prod.price
    }, 0)
    return result
  },[products]) 
  
  


  const handleSubmit = () =>{ 
    setProducts([...products,{
      name,
      price: +price
    }])
    setPrice('')
    setName('')
    
  }
  return (
    <div className="App" >
      <input 
        value={name}
        placeholder='Enter name....'
        onChange={e => setName(e.target.value)}
      />
      <br></br>
      <input
      value={price}
      type='number'
      placeholder='Enter price....'
      onChange={e => setPrice(e.target.value)}
      />
      <br></br>
      <button onClick={handleSubmit}>Add</button>
      <br></br>

      <h1>Total: {total}</h1>



      <ul>
    {products.map( (p,index) => (
      <li key={index }>{p.name} - {p.price}</li>
    ))}


      </ul>
    </div>
  );
}

export default App;
