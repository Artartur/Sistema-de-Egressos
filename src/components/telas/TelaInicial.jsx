import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerCadastro from "../registro/ContainerCadastro";
import "../../styles/telas.css";
export default function TelaInicial() {
  const navigate = useNavigate();

  return (
    <>
      <ContainerCadastro>
      <div className="content">
          <h4>
            A educação profissional transcende a finalidade de estrita
            preparação de mão de obra, sendo, inclusive, um fator de
            desenvolvimento humano e inclusão social, cultural e produtiva.
            Desta forma, além da formação profissional, o Senac, através da
            COPEG, favorece a inserção dos egressos dos seus cursos no mercado
            de trabalho e verifica a qualidade percebida pelo mercado dos
            egressos qualificados.
          </h4>
        </div>
        <div className="div-button">
          <button
            onClick={() => {
              navigate("/form");
            }}
          >
            Responder Formulário
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </ContainerCadastro>
    </>
  );
}
