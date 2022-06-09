const express = require("express");
const path = require("path");
const mysql = require('mysql');
const config = require('dotenv').config();
const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/empleados", (req, res) => {
  res.sendFile(path.join(__dirname + "/empleados.html"));
});

app.get("/ejecutivos", (req, res) => {
  res.sendFile(path.join(__dirname + "/ejecutivos.html"));
});

app.get("/administradores", (req, res) => {
  res.sendFile(path.join(__dirname + "/administradores.html"));
});

app.get("/general", (req, res) => {
  res.sendFile(path.join(__dirname + "/general.html"));
});

app.get("/style", (req, res) => {
    res.sendFile(path.join(__dirname + "/style.css"));
  });

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
connection.connect();

app.get('/data', async (req, res) => {
  const empleados = req.query.empleados;
  query = `SELECT * FROM database.empleados;`;
  connection.query(query, (err, result) => {
    if (!err) {
      return res.send(result).status(200);
    } else {
      console.log(`Ha ocurrido el siguiente ${err}`);
      return res.status(500);
    }
  });
 
});


app.get('/data1', async (req, res) => {
  const admins = req.query.admins;
  query = `SELECT idempleado, nombre, apellido, cargo, carro FROM database.empleados, database.cargos WHERE idcargos=idcargo and idcargos=1`;
  connection.query(query, (err, result) => {
    if (!err) {
      return res.send(result).status(200);
    } else {
      console.log(`Ha ocurrido el siguiente ${err}`);
      return res.status(500);
    }
  });
 
});

app.get('/data2', async (req, res) => {
  const ejecutivos = req.query.ejecutivos;
  query = `SELECT idempleado, nombre, apellido, cargo, carro FROM database.empleados, database.cargos WHERE idcargos=idcargo and idcargos=2`;
  connection.query(query, (err, result) => {
    if (!err) {
      return res.send(result).status(200);
    } else {
      console.log(`Ha ocurrido el siguiente ${err}`);
      return res.status(500);
    }
  });
 
});

app.get('/data3', async (req, res) => {
  const general = req.query.general;
  query = `SELECT idempleado, nombre, apellido, cargo, carro FROM database.empleados, database.cargos WHERE idcargos=idcargo and idcargos=3`;
  connection.query(query, (err, result) => {
    if (!err) {
      return res.send(result).status(200);
    } else {
      console.log(`Ha ocurrido el siguiente ${err}`);
      return res.status(500);
    }
  });
 
});