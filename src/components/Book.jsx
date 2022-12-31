import React from 'react'
import { Link } from 'react-router-dom'
import "./book.css"



function Book({book,click}) {

  return (
    <div className = "bookContainer">
      <a href={book.amazon_product_url} target="_blank"><img className='image' src={book.book_image}/></a>
      <p className='title'>{book.title}</p>
      <p className='author'>Author: {book.author}</p>
      <p className='description'>{book.description}</p>
      <Link to="/info"><button className='linksbtn' onClick={click}>More Info</button></Link>
      
    </div>
  )
}

export default Book
