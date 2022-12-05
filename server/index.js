const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test",
    database: "egresso"
});

app.get('/', (req, res) => {
    res.send("hello world")
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

app.listen(3001, ()=>{
    console.log("Server On")
})