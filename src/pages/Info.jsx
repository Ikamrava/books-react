import React, { useContext } from 'react'
import { context } from '../context'
import "./info.css"
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

function Info() {


  const {selected} = useContext(context)
  const length = selected.length > 0





  if(length){

    const purchaseLinks = selected[0].buy_links.map(item=>{
        return (
          <a key = {nanoid()}href={item.url} target="_blank" >{item.name}</a>
        )
      })

      return (
          
          <div className='infoWrapper'>
            <h1 className='headtitle'>Book Information</h1>
            <h3 className='bookTitle'>Title: {selected[0].title}</h3>
            <div className='imagewrapper'>
              <img src={selected[0].book_image} alt="" />
                <div className='infoContainer'>
                    <p><strong>Author:</strong> {selected[0].author}</p>
                    <p><strong>Price:</strong> £{selected[0].price}</p>
                    <p><strong>Discription:</strong>{selected[0].description}</p> 
                    <div className="purchaslinks">
                        <h3>Purchase Links:</h3>
                        {purchaseLinks}
                    </div>
                </div> 
            </div>
            <Link  to="/"><button className='goback'>Go Back</button></Link>
          </div> 
          )
        }else{
          return ( <Link  to="/"><button className='goback'>Go Back</button></Link>)
        }
  
    



   
    
  
}

export default Info
