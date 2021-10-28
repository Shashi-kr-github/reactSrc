


import {useEffect, useState} from "react";

export const  Todo =  () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [page, setPage] = useState(1);

    const[loading, setLoading] = useState(true)

useEffect(() => {
  getTodo()
}, [page]);
const getTodo = () => {
   fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
   .then((d) => d.json())
   .then(setData).then(() => {
     setLoading(false)
   })

}



const handleAddTodo = () => {
  fetch('http://localhost:3001/todos', {
    method: "POST",
    body : JSON.stringify({
      title: text,
      status : false,
    }),
    headers: {
      'Content-Type': "application/json"
    },
  }).then(getTodo)
}
const handleDeleteTodo = () => {
  fetch('http://localhost:3001/todos', {
    method: "DELETE",
    body : JSON.stringify({
      title: text,
      status : false,
    }),
    headers: {
      'Content-Type': "application/json"
    },
  }).then(getTodo)
}

  
 return loading ? (
   <h1>Loading...</h1>
 ): (<div className = "App">
   <input type="text" onChange = {(e) => setText(e.target.value)}></input>

   <button onClick = {handleAddTodo}>Add todo</button>
    {/* <button onClick = {handleDeleteTodo}>Delete todo</button> */}

   {data.map((e) => (
     <div key = {e.id}>{e.title}</div>
   ))}
   <button onClick={()=>{
     setPage(page + 1)
   }}>
     Next
   </button>
   <button onClick={()=>{
     setPage(page - 1)
   }}>
     Prev
   </button>
   </div>);
}