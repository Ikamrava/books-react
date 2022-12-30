import React, { useContext, useEffect, useState } from 'react'
import "./header.css"
import img from "../images/bookicon.png"
import List from "./List"
import { context } from '../context'
import { nanoid } from 'nanoid'


import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


export default function Sidebar() {
  const {lists} = useContext(context)
   const {changeCategory} = useContext(context)

 
  function clickHandler(e){
    changeCategory(e.target.outerText)
  }

  const allList = lists.map(item=>{
    return (
      <List list = {item} key={nanoid()} value = {item.list_name_encoded} onClick = {clickHandler}></List>
    )
  })

  return (
    <div>
     <div className='sidebar'>
        {allList}
       </div>
     
     </div>
  )
}
