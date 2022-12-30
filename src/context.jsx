import { Context, createContext, useContext, useEffect, useState } from "react";

const context = createContext()

function ContextProvider({children}){
    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=gGZ0Wz0IkWAsnUKkIAUWCO9Cay255T8w")
        .then(res=>res.json())
        .then(data=>{

            setBooks(data.results.books)
        })
    },[])
    console.log(books)

    return (
     <context.Provider value= {{books}}>
        {children}
     </context.Provider>
    )
}

export {ContextProvider,context}