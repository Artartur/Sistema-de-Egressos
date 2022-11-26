import React from 'react'
import {BrowserRouter as Br, Routes, Route} from 'react-router-dom';
import Form from './components/form/Form'
import Login from './components/registro/Login'
import Cadastro from './components/registro/Cadastro';
import './App.css'

function App() {
  
  return (
    <>
    <Br>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
    </Br>
      {/* <Form/> */}
    </>
  )
}

export default App
