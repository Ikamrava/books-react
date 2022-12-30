import React from 'react'
import "./list.css"

function List({list,onClick,value}) {
  return (
    <div className='list_items' onClick={onClick}>
        <a value = {value}>{list.list_name_encoded} </a>
    </div>
  )
}

export default List
