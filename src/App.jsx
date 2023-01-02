import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar"
import Info from './pages/Info'
import Photos from './pages/Photos'
import header from './images/header.png'
import headermobile from './images/header-mobile.png'
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

function App() {
  const [block,setBlock] = useState(true)
  

  
  function clickHandler(){
    const test = !block
    const hamBtn = document.querySelector(".sidebarwrapper")
    block ? hamBtn.style.display = "block" : hamBtn.style.display = "none"
    hamBtn.classList.toggle("z-index")
    setBlock(test)
    
  }


  return (
       <div >
        <header className='wrapper'>
          <img className = "topImage" src={header}></img>
          <h2 className='toptext'>Top Rated Books</h2>
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
        </div>
  )
}

export default App
