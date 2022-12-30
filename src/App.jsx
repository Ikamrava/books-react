import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from "./components/Sidebar"
import Info from './pages/Info'
import Photos from './pages/Photos'
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
       <div className='body'>
            <Sidebar />
            <Routes>
              <Route exact path='/' element= {<Photos/>}> </Route>
              <Route  path='/info' element={<Info/>}></Route>
            </Routes>
        </div>
  )
}

export default App
