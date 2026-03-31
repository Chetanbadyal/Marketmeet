import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Layout/User/Header'
import Footer from './Layout/User/Footer'
import Home from './User/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Layout/User/Master'
import Contact from './User/Contact'
import About from './User/About'
import Project from './User/Project'
import Services from './User/Services'
import Team from './User/Team'
import Quate from './User/Quate'
import Feature from './User/Feature'
import Teatimonial from './User/Teatimonial'
import Login from './User/Login'
import Register from './User/Register'





function App() {
  const [count, setCount] = useState(0)

  return (

<BrowserRouter>

<Routes>
<Route path='/' element={<Master/>}>
<Route path='/' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='Project' element={<Project/>}/>
<Route path='/service' element={<Services/>}/>
<Route path='Team' element={<Team/>}/>
<Route path='Quate' element={<Quate/>}/>
<Route path='Features' element={<Feature/>}/>
<Route path='Teatimonial' element={<Teatimonial/>}/>
<Route path='Register' element={<Register/>}/>

<Route path='/login' element={<Login/>}/>



</Route>

</Routes>

</BrowserRouter>

  )
}

export default App;
