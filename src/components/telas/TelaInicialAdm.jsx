import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerCadastro from "../registro/ContainerCadastro";
import "../../styles/telas.css";

export default function TelaInicialAdm() {
  const navigate = useNavigate();

  return (
    <>
      <ContainerCadastro>
        <div className="div-button">
        <button 
             onClick={() => {
              navigate("/dashboard");
            }}>Dashboard</button>
          <button 
           onClick={() => {
            navigate("/formRespondidos");
          }}>Formulários Respondidos</button>
          <button
           onClick={() => {
            navigate("/");
          }}>Logout</button>
        </div>
      </ContainerCadastro>
    </>
  );
}
