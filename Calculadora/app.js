const express = require("express");
const app = express();
const url = require('url');
const port = 3000; app.get('/calculadora', (req, res) => {
  let numero = parseFloat(req.query.numero);
  let numero2 = parseFloat(req.query.numero2);
  let operacion = req.query.operacion
  const calculadora = {
    get operacion() {
      switch (operacion) {
        case "sumar":
          var resultado = numero + numero2;
          return resultado
          break;
        case "restarr":
          var resultado = numero - numero2;
          return resultado
          break;
        case "multiplicar":
          var resultado = numero * numero2;
          return resultado
          break;
        case "dividir":
          var resultado = numero / numero2;
          return resultado
        default:
          break;
      }
    }
  }
  res.json(calculadora);
});
  
app.listen(port, () => console.log(`Escucha ${port}!`)); 