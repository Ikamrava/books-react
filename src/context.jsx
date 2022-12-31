import { Context, createContext, useContext, useEffect, useState } from "react";

const context = createContext()

function ContextProvider({children}){
    const [books,setBooks] = useState([])
    const [lists,setLists] = useState([])
    const [listName,setListName] = useState("hardcover-fiction")
    const [loading,setloading] = useState(false)
    const [selected,setSelected] = useState ("")

  useEffect(()=>{
    fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=gGZ0Wz0IkWAsnUKkIAUWCO9Cay255T8w")
        .then(res=>res.json())
        .then(data=>{
            setLists(data.results)
        })
  },[])


    useEffect(()=>{
        setloading(true)
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=gGZ0Wz0IkWAsnUKkIAUWCO9Cay255T8w`)
        .then(res=>res.json())
        .then(data=>{
            setBooks(data.results.books)
            setloading(false)
        })
    },[listName])

    function changeCategory(selectedItem){
        setListName(selectedItem)
        
    }
   console.log(books)
    function infoHandler (title){
       const chosenbook = books.filter(item=>item.title === title)
        setSelected(chosenbook)
    }
     

    return (
     <context.Provider value= {{books,lists,changeCategory ,loading,infoHandler,selected}}>
        {children}
     </context.Provider>
    )
}





export {ContextProvider,context}