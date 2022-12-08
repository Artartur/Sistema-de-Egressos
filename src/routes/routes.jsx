import React from "react";
import { BrowserRouter as Br, Routes, Route } from "react-router-dom";
import Form from "../components/form/Form";
import Form2 from "../components/form/Form2";
import Form3 from "../components/form/Form3";
import Login from "../components/registro/Login";
import Cadastro from "../components/registro/Cadastro";
import TelaInicial from "../components/telas/TelaInicial";
import TelaInicialAdm from "../components/telas/TelaInicialAdm";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const signed = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

export default function Routess() {
  return (
    <>
      <Br>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Private Item={TelaInicial} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* <Route path="/form" element={<Form/>}/>
        <Route path="/form/page2" element={<Form2/>}/>
        <Route path="/form/page3" element={<Form3/>}/> */}
          {/* <Route path="/home/adm" element={<TelaInicialAdm/>}/> */}
        </Routes>
      </Br>
    </>
  );
}

