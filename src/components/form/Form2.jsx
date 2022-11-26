import React from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import "../../styles/form.css";

export default function Form2() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png"
            alt="logo do senac"
          />
          <h3>
            Bem-vindo a Central de Oportunidades Profissionais do Egresso -
            COPEG
          </h3>
        </div>
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
        <div className="div-input">
          <form>
            <div>
              <InputForm type="text" name="curso" title="Curso" />
              <InputForm
                type="month"
                name="conclusão"
                title="Ano de Conclusão"
              />
              {/* checkbox */}
              <InputForm type="text" name="curso2" title="2º Curso" />
              <InputForm
                type="month"
                name="conclusão2"
                title="Ano de Conclusão"
              />
              {/* checkbox */}
              <InputForm type="text" name="curso3" title="3º Curso" />
              <InputForm
                type="month"
                name="conclusão3"
                title="Ano de Conclusão"
              />
              {/* checkbox */}
            </div>
            <div className="button">
              <button
                onClick={() => {
                  navigate("/form/page3");
                }}
              >
                Próxima Página
              </button>
              <button type="reset">Limpar Formulário</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
