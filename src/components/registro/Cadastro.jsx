import React, { useState } from "react";
import Input from "./Input";

const Cadastro = () => {
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
        <div className="content-login">
          <div className="div-input-login">
            <form>
              <div>
                <Input type="text" title="Text" />
                <Input type="text" title="Text" />
                <Input type="text" title="Text" />
                <Input type="text" title="Text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
