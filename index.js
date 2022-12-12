require('dotenv').config();
var port = process.env.PORT || 3001;
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});


app.get('/', (req, res) =>{
    res.send(db.query('SELECT * FROM cadastro Where cpf'));
})

app.post('/registro', (req, res) => {
    const { nome } = req.body;
    const { email } = req.body;
    const { cpf } = req.body;
    const { sexo }= req.body;
    
    let SQL = "INSERT INTO cadastro (cpf, nome,email,sexo) VALUES (?,?,?,?)";
  
    db.query(SQL, [cpf,nome,email,sexo],(err, res)=>{
      console.log(err);
    })
})

app.post('/form', (req, res) =>{
    const { nome } = req.body;
    const { cpf } = req.body;
    const { email } = req.body;
    const { datanascimento } = req.body;
    const { sexo } = req.body;
    const { civil } = req.body;
    const { carteira } = req.body;
    const { veiculo } = req.body;
    const { endereco } = req.body;
    const { complemento } = req.body;
    const { bairro } = req.body;
    const { cidade } = req.body;
    const { uf } = req.body;
    const { cep } = req.body;
    const { telefoneR } = req.body;
    const { celular } = req.body;
    const { curso } = req.body;
    const { conclusao } = req.body;
    const { curso2 } = req.body;
    const { conclusao2 } = req.body;
    const { curso3 } = req.body;
    const { conclusao3 } = req.body;
    const { curriculo } = req.body;

    let SQL = "INSERT INTO formulario (cpf,email,nome,datanascimento,sexo,civil,carteira,veiculo,endereco,complemento,bairro,cidade,uf,cep,telefoneR,celular,curso,conclusao,curso2,conclusao2,curso3,conclusao3,curriculo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  
    db.query(SQL, [cpf,email,nome,datanascimento,sexo,civil,carteira,veiculo,endereco,complemento,bairro,cidade,uf,cep,telefoneR,celular,curso,conclusao,curso2,conclusao2,curso3,conclusao3,curriculo],(err, res)=>{
      console.log(err);
    })
});

app.listen(port, ()=>{
    console.log("Server On")
})