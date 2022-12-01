import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import "../../styles/form.css";

export default function Form3() {
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
              <h4>
                Autorização para divulgação de dados conforme Lei Federal Nº
                13.709 de 14/08/2018 * AUTORIZO, desde já, o uso dos dados
                cadastrais, bem como o currículo profissional, ora informados, a
                título gratuito, pelo Serviço Nacional de Aprendizagem Comercial
                - SENAC/PE, para a troca dos mesmos, com empresas parceiras e/ou
                instituições públicas, com a finalidade de gerar e promover
                oportunidades profissionais, nas áreas em que obtive formação na
                instituição. Esta autorização poderá ser revogada a qualquer
                momento, conforme exposto no Art. 18 da Lei Federal Nº 13.709 de
                14/08/2018, mediante simples requerimento a Instituição ou
                diretamente com o setor responsável através do e-mail:
                copeg-dep@pe.senac.br
              </h4>
              <SelectForm title="Autorização" indice={5} />
              <InputForm
                title="Gostaríamos de solicitar o seu currículo para encaminhar para as empresas."
                name="upload"
                type="file"
                accept="application/pdf"
              />
            </div>
            <div className="button">
            <button
                onClick={() => {
                  navigate("/form/page2");
                }}
              > <FaAngleLeft/>
                Voltar
              </button>
              <button type="reset">Limpar Formulário</button>
              <button type="submit">
                Enviar Formulário
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
