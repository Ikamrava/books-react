import React, { useContext, useEffect, useState } from 'react'
import "./sidebar.css"
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
    if(window.innerWidth<700){
      const hamBtn = document.querySelector(".sidebarwrapper")
      hamBtn.style.display = "none"
    }
  }

  const allList = lists.map(item=>{
    return (
      <List list = {item} key={nanoid()} value = {item.list_name_encoded} onClick = {clickHandler}></List>
    )
  })

  return (
    <div className='sidebarwrapper'>
     <div className='sidebar'>
      <h3 className='cat'>Category</h3>
        {allList}
       </div>
     
     </div>
  )
}
