import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import "../../styles/form.css";

export default function Form() {
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
              <InputForm title="Email" type="email" />
              <InputForm title="Nome Completo" type="text" />
              <InputForm title="Data de Nascimento" type="date" />
              <SelectForm title="Sexo" indice={0} />
              <SelectForm title="Estado Civil" indice={1} />
              <SelectForm title="Carteira de Motorista" indice={4} />
              <SelectForm title="Possui veículo" indice={2} />
              <InputForm title="Endereço" type="text" />
              <InputForm title="Complemento" type="text" />
              <InputForm title="Bairro" type="text" />
              <InputForm title="Cidade" type="text" />
              <SelectForm title="UF" indice={3} />
              <InputForm title="CEP" type="text" />
              <InputForm title="Telefone Residecial" type="text" />
              <InputForm
                title="Telefone Celular (Preferência Whatsapp) "
                type="text"
              />
            </div>
            <div className="button">
            <button
                onClick={() => {
                  navigate("/");
                }}
              > <FaAngleLeft/>
                Voltar
              </button>
              <button type="reset">Limpar Formulário</button>
              <button
                onClick={() => {
                  navigate("/form/page2");
                }}
              >
                Próxima Página
                <FaAngleRight/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
