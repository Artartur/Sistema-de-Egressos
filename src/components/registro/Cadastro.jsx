import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Input from "./Input";

const Cadastro = () => {
  
  const navigate = useNavigate();

  const options = [
    { id: 0, label: "Sexo" },
    { id: 1, label: "Masculino" },
    { id: 2, label: "Feminino" },
    { id: 3, label: "Prefiro não informar" }
  ];

  const [selectValue, setSelectValue] = useState(options[0].label);

  const[values ,setValues]= useState();

  const handleChangeValues = (value) =>{
    setValues((prevValue)=>({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleSubmit = () =>{

  }
  
  return (
    <>
      <div className="container-login">
        <div className="logo-login">
          <div className="card-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Senac_logo.svg/2560px-Senac_logo.svg.png"
              alt="logo do senac"
            />
            <h2>Sistema de Egressos</h2>
          </div>
        </div>
        <div className="content-cadastro">
          <div className="div-input-cadastro">
            <form className="form-cadastro">
              <div>
                <Input type="text" title="Nome Completo" required={true} name="nome" onChange={handleChangeValues}/>
                <Input type="email" title="Email" required={true} name="email" onChange={handleChangeValues}/>
                <Input type="text" title="CPF" required={true} name="cpf" onChange={handleChangeValues}/>
                <select
                  name="opcao"
                  id="opcao"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  {options.map((opcao) => (
                    <option key={opcao.id} value={opcao.label}>
                      {opcao.label}
                    </option>
                  ))}
                </select>
                {selectValue == options[0].label ? "Escolha um gênero válido" : ""}
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
                  <button type="submit" onClick={()=>handleSubmit()}>Cadastrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
