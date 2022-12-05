import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import Container from "./container";
import "../../styles/form.css";

export default function Form() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
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
                  navigate("/telaaluno");
                }}
              >
                {" "}
                <FaAngleLeft />
                Voltar
              </button>
              <button type="reset">Limpar Formulário</button>
              <button 
                onClick={() => {
                  navigate("/form/page2");
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
