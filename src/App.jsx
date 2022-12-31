import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from "./components/Sidebar"
import Info from './pages/Info'
import Photos from './pages/Photos'
import header from './images/header.png'
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

function App() {
  const [block,setBlock] = useState(true)
  

  
  function clickHandler(){
    console.log ("before " + block)
    const test = !block
    console.log ("test  " + test)
    const hamBtn = document.querySelector(".sidebarwrapper")
    block ? hamBtn.style.display = "block" : hamBtn.style.display = "none"
    hamBtn.classList.toggle("z-index")
    setBlock(test)
    console.log ("after " + block)
  }


  return (
       <>
       <header>
        <img src={header}></img>
        <div className='hamburger' onClick={clickHandler}>
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
       </header>
       <div className='body'>
            <Sidebar />
            <Routes>
              <Route exact path='/' element= {<Photos/>}> </Route>
              <Route  path='/info' element={<Info/>}></Route>
            </Routes>
        </div>
        </>
  )
}

export default App
