import React from 'react'
import "./book.css"



function Book({book}) {

  return (
    <div className = "bookContainer">
      <p className='rank'>Rank: {book.rank}</p>
      <a href={book.amazon_product_url} target="_blank"><img className='image' src={book.book_image}/></a>
      <p className='title'>{book.title}</p>
      <p className='author'>Author: {book.author}</p>
      <p className='description'>{book.description}</p>
      <button className='linksbtn'>How to buy</button>
    </div>
  )
}

export default Book
