import react from "react";

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
    {children}
      </div>
    </>
  );
};
