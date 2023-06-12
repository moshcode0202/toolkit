import { fromJSON } from "postcss";
import React, { useEffect, useState } from "react";

const LocalTodo = () => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const [data, setData] = useState([]);

  const addTodo = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
      let todosJson = JSON.parse(todos);
      if (
        todosJson.filter((value) => {
          return value.title == todo.title;
        }).length > 0
      ) {
        alert("Todo with this title already exists");
      } else {
        todosJson.push(todo);
        localStorage.setItem("todos", JSON.stringify(todosJson));
        alert("Todo has been added");
        setTodo({ title: "", desc: "" });
      }
    } else {
      localStorage.setItem("todos", JSON.stringify([todo]));
    }
  };
  useEffect(() => {
    let todos = localStorage.getItem("todos");
// console.log(todos)
    setData(JSON.parse(todos));
  }, []);
// console.log(data,'totototototo')
  const editData=(title)=>{

  }
  const deleteData=(title)=>{
    let newData = setData((item)=>item.title !== title)
    localStorage.setItem("todos",fromJSON.parse(newData))
    setData(newData)
  }
  return (
    <div>
      <h1>Add todos</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="title">Name:</label>
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
        />
        <label htmlFor="desc">Email:</label>
        <input
          value={todo.desc}
          onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
          type="email"
        />
        <button className="bg-slate-950 text-white text-2xl" type="submit">
          Add
        </button>
      </form>
      <hr />
      <br />
      {data.map((item) => {
        return (
          <div key={item.title} className="flex gap-7 items-start justify-start">
            <h3>{item.title}</h3>
            <h3>{item.desc}</h3>
            <button onClick={()=>editData(item.title)}>Edit</button>
            <button onClick={()=>deleteData(item.title)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default LocalTodo;
