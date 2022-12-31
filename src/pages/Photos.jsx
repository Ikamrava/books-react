import React, { useContext } from 'react'
import { context } from '../context'
import Book from '../components/Book'
import "./photos.css"



function Photos() {
  const {books} = useContext(context)
  const {loading} = useContext(context)
  const {infoHandler} = useContext(context)
  

  const book = books.map(item=>{
    return(
      <Book key = {item.rank} book = {item} click = {()=>infoHandler(item.title)}/>
    )
  })
  return (
  
    <div className='photos'>
      {loading? <div>...  Loading</div>:book}
    </div>
    
  )
}

export default Photos
