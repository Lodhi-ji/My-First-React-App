import React , {useEffect, useState, useRef} from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Card from './components/Cards'
import Counter from './components/counter'
import Grocerylist from './components/grocerylist'
import './App.css'
const App = () => {
  useEffect(() => {
    alert("Run only first Time From App.jsx")
    btnref.current.style.backgroundColor = "cyan";
  }, [])

  const btnref = useRef(null);
  const [showbtn,setbtn] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  
  return (
    <>
       <Navbar/>

       <div className="cards">
        <Card title = "Card 1" description = "Disription of Card 1 "/>
        <Card title = "Card 2" description = "Disription of Card 2 "/>
        <Card title = "Card 3" description = "Disription of Card 3 "/>  
        <Card title = "Card 4" description = "Disription of Card 4 "/>                
        </div>

        <Counter/>

        <p className='btn'>
        {showbtn?<button ref = {btnref}> Showbtn is true</button>: <button ref = {btnref}> Showbtn is False</button>}
        {showbtn && <button ref={btnref}> It will be shown only when showbtn is true</button>}
        <button ref={btnref} onClick={() => setbtn(!showbtn)}> Toggel Button</button>
        </p>

        <Grocerylist/>

        <input type="text" className='inputForm' placeholder="Enter your name" name="name" value={form.name} onChange={handleChange} />
        <input type="text" className='inputForm' placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} />
        <input type="password" className='inputForm' placeholder="Enter your password" name="password" value={form.password} onChange={handleChange} />
       <Footer/>
    </>
  )
}

export default App