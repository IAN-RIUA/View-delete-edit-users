import React from "react";
import AddTodo from "./AddTodo";
import ViewTodos from "./ViewTodos";
import { useNavigate, Routes, Route } from "react-router-dom";
import Users from "./Users";
import CreateToDo from "./CreateToDo";

function RouteManager() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <button onClick={() => navigate(-1)}>go back</button> */}
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/create-todo" element={<ToDo />} />
        <Route exact path="/view-todos" element={<ViewTodos />} />
        <Route exact path="/add-todo" element={<AddTodo />} />
        <Route exact path="/Users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default RouteManager;
