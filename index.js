const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('isomorphic-fetch');

const url = 'https://klassi-proto.herokuapp.com./api/users';

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    const nombreReq = req.query.nombre;
    fetch(url)
    .then (response => response.json())
    .then(json => {
        const usuarios = json.result;
        const usuario = '';
        if(nombreReq){
            const usuarioResp = usuarios.filter(element => element.nombre === nombreReq);
            res.send(usuarioResp);
        }})
    });

app.listen(3001);