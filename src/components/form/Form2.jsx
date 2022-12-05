import React from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Container from "./container";
import SelectForm from "./SelectForm";
import "../../styles/form.css";

export default function Form2() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div className="div-input">
          <form className="form2">
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
                  navigate("/form");
                }}
              >
                {" "}
                <FaAngleLeft />
                Voltar
              </button>
              <button type="reset">Limpar Formulário</button>
              <button
                onClick={() => {
                  navigate("/form/page3");
                }}
              >
                Próxima Página
                <FaAngleRight />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
