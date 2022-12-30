import React, { useContext } from 'react'
import { context } from '../context'
import { Context } from 'react'
import Book from '../components/Book'
import "./photos.css"


function Photos() {
  const {books} = useContext(context)

  const book = books.map(item=>{
    return(
      <Book key = {item.rank} book = {item}/>
    )
  })
  return (
    <div className='photos'>
      {book}
    </div>
  )
}

export default Photos
