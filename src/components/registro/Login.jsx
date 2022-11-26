import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

import MaskedInput from "./MaskedInput";
import "../../styles/login.css";

export default function Login() {
  const options = [
    { id: 1, label: "Aluno (Graduação ou Pós)" },
    { id: 2, label: "Administração" },
  ];

  const navigate = useNavigate();

  const [cpf, setCpf] = useState("");
  const [selectValue, setSelectValue] = useState(options[0].label);

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
          <h3>Entre para iniciar sua sessão</h3>
        </div>
        <div className="content-login">
          <div className="div-input-login">
            <form>
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

              <MaskedInput
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="test"
              />

              {selectValue == options[0].label ? (
                <div className="cadastrar">
                  <button className="btn-cadastro" onClick={()=>{
                    navigate("/cadastro")
                  }}>Cadastre-se aqui</button>
                </div>
              ) : (
                ""
              )}

              <div className="button-login">
              <button className="btn-cadastro" onClick={()=>{
                    navigate("/form")
                  }}>Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
