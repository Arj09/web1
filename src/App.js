import React from "react";
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import { ListView } from "./Component/ListView";
import { EditTask } from "./Component/EditTask";
import { AddTask } from "./Component/AddTask";
import { UserContextProvider } from "./Component/ContextAPI/ContextProvider";
import { Testing } from "./Component/Testing";

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route index  element={<ListView/>} />
      <Route path="edit"  element={<EditTask/>} />
      <Route path="add"  element={<AddTask/>} />
      <Route path="testing" element={<Testing/>} />
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
    
  );
}

export default App;
