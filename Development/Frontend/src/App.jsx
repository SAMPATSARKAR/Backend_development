import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')//axios call the backend api
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <>
    <h1>Hello Sampat</h1>
    <p>jokes: {jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
        </div>
      ))
    }
    </>
  )
}

export default App