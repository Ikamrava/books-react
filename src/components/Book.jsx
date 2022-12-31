import React from 'react'
import { Link } from 'react-router-dom'
import "./book.css"



function Book({book,click}) {

  return (
    <div className = "bookContainer">
      {/* href={book.amazon_product_url}  */}
      
      <Link to="/info" onClick={click}><img className='image' src={book.book_image}/></Link>
      <p className='title'>{book.title}</p>
      <p className='author'>Author: {book.author}</p>
      <p className='description'>{book.description}</p>
      <Link to="/info"><button className='linksbtn' onClick={click}>More Info</button></Link>
      
    </div>
  )
}

export default Book
