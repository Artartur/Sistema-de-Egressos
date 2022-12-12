import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import api from "../../services/axios";
import Container from "./container";
import "../../styles/form.css";

export default function Form() {
  const navigate = useNavigate();

  const [values, setValues] = useState("");
  const [sexos, setSexos] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [carteiras, setCarteiras] = useState("");
  const [veiculos, setVeiculos] = useState("");
  const [ufs, setUf] = useState("");

  const sexo = ["Masculino", "Feminino", "Prefiro não Informar"];
  const civil = ["Solteiro(a)", "Casado(a)", "Divórciado(a)", "Viúvo(a)"];
  const carteira = [
    "Sim, tipo A",
    "Sim, tipo B",
    "Sim, A e B",
    "Não possuo",
    "Outro tipo de carteira",
  ];
  const veiculo = [
    "Sim, carro",
    "Sim, moto",
    "Sim, carro e moto",
    "Não possuo",
    "Outro veículo",
  ];
  const uf = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RR",
    "RO",
    "RJ",
    "RN",
    "RS",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const handleSexo = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));

    setSexos(value.target.value);
  };

  const handleCivil = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));

    setEstadoCivil(value.target.value);
  };

  const handleCarteira = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));

    setCarteiras(value.target.value);
  };

  const handleVeiculo = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));

    setVeiculos(value.target.value);
  };

  const handleUf = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));

    setUf(value.target.value);
  };

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSubmit = () => {
    api
      .post("https://sistema-egresso.herokuapp.com/form", {
        cpf: values.cpf,
        email: values.email,
        nome: values.nome,
        datanascimento: values.datanascimento,
        sexo: values.sexo,
        civil: values.civil,
        carteira: values.carteira,
        veiculo: values.veiculo,
        endereco: values.endereco,
        complemento: values.complemento,
        bairro: values.bairro,
        cidade: values.cidade,
        uf: values.uf,
        cep: values.cep,
        telefoneR: values.telefoneR,
        celular: values.celular,
        curso: values.curso,
        conclusao: values.conclusao,
        curso2: values.curso2,
        conclusao2: values.conclusao2,
        curso3: values.curso3,
        conclusao3: values.conclusao3,
        curriculo: values.curriculo,
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
      <Container>
        <div className="div-input">
          <form>
            <div className="div-form">
              <label htmlFor="cpf">CPF *</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="CPF"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="nome">Nome Completo *</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome Completo"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="data">Data de Nascimento *</label>
              <input
                type="date"
                name="datanascimento"
                id="data"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="sexo">Gênero *</label>
              <select
                name="sexo"
                id="sexo"
                value={sexos}
                onChange={handleSexo}
                required={true}
              >
                <option value="" disabled>
                  Selecionar
                </option>
                {sexo.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
              <label htmlFor="civil">Estado Civil *</label>
              <select
                name="civil"
                id="civil"
                value={estadoCivil}
                onChange={handleCivil}
                required={true}
              >
                <option value="" disabled>
                  Selecionar
                </option>
                {civil.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
              <label htmlFor="carteira">Possui Carteira de Motorista? *</label>
              <select
                name="carteira"
                id="carteira"
                value={carteiras}
                onChange={handleCarteira}
                required={true}
              >
                <option value="" disabled>
                  Selecionar
                </option>
                {carteira.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
              <label htmlFor="veiculo">Possui Veículo? *</label>
              <select
                name="veiculo"
                id="veiculo"
                value={veiculos}
                onChange={handleVeiculo}
                required={true}
              >
                <option value="" disabled>
                  Selecionar
                </option>
                {veiculo.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
              <label htmlFor="endereco">Endereço *</label>
              <input
                type="text"
                placeholder="Endereço"
                name="endereco"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="complemento">Complemento (Não obrigatório)</label>
              <input
                type="text"
                placeholder="Complemento"
                name="complemento"
                onChange={handleChangeValues}
              />
              <label htmlFor="bairro">Bairro *</label>
              <input
                type="text"
                placeholder="Bairro"
                name="bairro"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="cidade">Cidade *</label>
              <input
                type="text"
                placeholder="Cidade"
                name="cidade"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="uf">UF *</label>
              <select
                name="uf"
                id="uf"
                value={ufs}
                onChange={handleUf}
                required={true}
              >
                <option value="" disabled>
                  Selecionar
                </option>
                {uf.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
              <label htmlFor="cep">CEP *</label>
              <input
                type="number"
                placeholder="CEP"
                name="cep"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="telefoneR">Telefone Residencial</label>
              <input
                id="telefoneR"
                type="tel"
                name="telefoneR"
                placeholder="Telefone Residencial"
                onChange={handleChangeValues}
              />
              <label htmlFor="celular">Celular *</label>
              <input
                id="celular"
                type="tel"
                placeholder="Celular"
                name="celular"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="curso">Curso que você fez *</label>
              <input
                id="curso"
                type="text"
                placeholder="Curso"
                name="curso"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="conclusao">Mês de Conclusão do Curso *</label>
              <input
                id="conclusao"
                type="date"
                placeholder="Mês de Conclusão"
                name="conclusao"
                onChange={handleChangeValues}
                required={true}
              />
              <label htmlFor="curso2">
                2º Curso que você fez (Não obrigatório)
              </label>
              <input
                id="curso2"
                type="text"
                placeholder="2º Curso"
                name="curso2"
                onChange={handleChangeValues}
              />
              <label htmlFor="conclusao">Mês de Conclusão do Curso</label>
              <input
                id="conclusao2"
                type="date"
                placeholder="Mês de Conclusão"
                name="conclusao2"
                onChange={handleChangeValues}
              />
              <label htmlFor="curso3">
                3º Curso que você fez (Não obrigatório)
              </label>
              <input
                id="curso3"
                type="text"
                placeholder="3º Curso"
                name="curso3"
                onChange={handleChangeValues}
              />
              <label htmlFor="conclusao">Mês de Conclusão do Curso</label>
              <input
                id="conclusao"
                type="date"
                placeholder="Mês de Conclusão"
                name="conclusao"
                onChange={handleChangeValues}
              />
              <label htmlFor="curriculo">
                Nos Envie Seu Currículo Para Enviarmos Para as Empresas
              </label>
              <input
                type="file"
                name="curriculo"
                id="curriculo"
                onChange={handleChangeValues}
                required={true}
              />
            </div>
            <div className="button">
              <button
                onClick={() => {
                  navigate("/home");
                }}
              >
                <FaAngleLeft /> Voltar
              </button>
              <button type="reset">Limpar Formulário</button>
              <button type="submit" onClick={() => handleSubmit()}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
