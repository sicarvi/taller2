const express = require('express')
const os = require("os")
const app = express()
const port = 3000

const pokeneas = [
  {"id":"1","nombre":"checho","altura":"1.69","habilidad":"saludar a las p","imagen":"banano","frase_filosofica":"eso gonor*"},
  {"id":"2","nombre":"ñatico","altura":"1.72","habilidad":"rescatar a puntilla","imagen":"banano","frase_filosofica":"gracias envigao"},
]

app.get('/descripcion', (req, res) => {
  const number = Math.floor(Math.random() * pokeneas.length);
  var aux = {"id":pokeneas[number]["id"],"nombre":pokeneas[number]["nombre"],"altura":pokeneas[number]["altura"],"habilidad":pokeneas[number]["habilidad"]}
  res.send(JSON.stringify(aux)+" - Container Id: "+os.hostname())
})

app.get('/imagen', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    var aux = {"imagen":pokeneas[number]["imagen"],"frase_filosofica":pokeneas[number]["frase-filosofica"]}
    res.send(JSON.stringify(aux)+" - Container Id: "+os.hostname())
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})