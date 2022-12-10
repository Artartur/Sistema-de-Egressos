import React from "react";

export default function Container ({children}){
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
        {children}
      </div>
    </>
  );
};
