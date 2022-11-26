import React from "react";
import Input from './InputForm'
import Select from './SelectForm';
import "../../styles/form.css";

export default function Form() {
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
              <Input title="Email" type="email" />
              <Input title="Nome Completo" type="text" />
              <Input title="Data de Nascimento" type="date" />
              <Select title="Sexo" indice={0}/>
              <Select title="Estado Civil" indice={1}/>
              {/* <Select title="Carteira de habilitação"/>*/}
              <Select title="Possui veículo" indice={2}/> 
              <Input title="Endereço" type="text" />
              <Input title="Complemento" type="text" />
              <Input title="Bairro" type="text" />
              <Input title="Cidade" type="text" />
              <Select title="UF" indice={3}/>
              <Input title="CEP" type="text" />
              <Input title="Telefone Residecial" type="text" />
              <Input title="Telefone Celular (Preferência Whatsapp) " type="text" />
            </div>
            <div className="button">
              <a href="#test"><button type="submit">Próxima Página</button></a>
              <button type="reset">Limpar Formulário</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
