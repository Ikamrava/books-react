import React from 'react'
import "./header.css"
import img from "../images/bookicon.png"
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


export default function Header() {
  return (
     <header>
            <Link to="/"><img src={img}/></Link>
            <Link to="/info"><h3>Best Seller Books</h3></Link>
         
     </header>
  )
}
