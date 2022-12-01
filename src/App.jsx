import React from 'react'
import {BrowserRouter as Br, Routes, Route} from 'react-router-dom';
import Form from './components/form/Form'
import Form2 from './components/form/Form2'
import Form3 from './components/form/Form3'
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
        <Route path="/form/page2" element={<Form2/>}></Route>
        <Route path="/form/page3" element={<Form3/>}></Route>
      </Routes>
    </Br>
    </>
  )
}

export default App
