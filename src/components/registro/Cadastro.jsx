import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContainerCadastro from "./ContainerCadastro";
import api from "../../services/axios"
import useAuth from "../../hooks/useAuth";

const Cadastro = () => {
  
  const navigate = useNavigate();

  
  const [values, setValues] = useState();
  // const [error, setError] = useState("");
  // const {cadastrar} = useAuth();

  const options = ['Masculino', 'Feminino', 'Prefiro não Informar'];

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = () => {
    api.post("http://localhost:3001/registro", {
      nome: values.nome,
      email: values.email,
      cpf: values.cpf,
      sexo: values.sexo,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <>
      <ContainerCadastro>
        <div className="content-cadastro">
          <div className="div-input-cadastro">
            <form className="form-cadastro">
              <div>
                <label htmlFor="nome">Nome Completo</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Nome Completo"
                  required={true}
                  onChange={handleChangeValues}
                />
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required={true}
                  name="email"
                  onChange={handleChangeValues}
                />
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  placeholder="CPF"
                  required={true}
                  name="cpf"
                  onChange={handleChangeValues}
                />
                <select name="sexo" id="sexo" onChange={handleChangeValues}>
                  {options.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>

                <div className="buttons">
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <FaAngleLeft />
                    Voltar
                  </button>
                  <button type="reset">Limpar dados</button>
                  <button type="submit" onClick={() => handleSubmit()}>
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ContainerCadastro>
    </>
  );
};

export default Cadastro;
