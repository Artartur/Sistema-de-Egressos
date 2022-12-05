import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerCadastro from "../registro/ContainerCadastro";
import "../../styles/telas.css";
export default function TelaInicial() {
  const navigate = useNavigate();

  return (
    <>
      <ContainerCadastro>
        <div className="div-button">
          <button 
           onClick={() => {
            navigate("/form");
          }}>Responder Formulário</button>
          <button
           onClick={() => {
            navigate("/");
          }}>Logout</button>
        </div>
      </ContainerCadastro>
    </>
  );
}
