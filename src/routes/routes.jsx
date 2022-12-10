import React from "react";
import { BrowserRouter as Br, Routes, Route } from "react-router-dom";
import Form from "../components/form/Form";
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
          <Route path="/home" element={/*<Private Item=>*/<TelaInicial/> /*/>*/} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/form" element={<Form/>}/>
          <Route path="/home/adm" element={<TelaInicialAdm/>}/>
        </Routes>
      </Br>
    </>
  );
}

