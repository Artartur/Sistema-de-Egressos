import React from 'react';

export default function ContainerCadastro({children}){
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
        {children}
        </div>
        </>
    )
}