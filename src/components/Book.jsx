import React from 'react'
import "./book.css"



function Book({book}) {

  return (
    <div className = "bookContainer">
      <p className='rank'>Rank: {book.rank}</p>
     <img className='image' src={book.book_image}/>
      <p className='title'>{book.title}</p>
      <p className='author'>Author: {book.author}</p>
      <button className='links'>Buy Links</button>
    </div>
  )
}

export default Book
