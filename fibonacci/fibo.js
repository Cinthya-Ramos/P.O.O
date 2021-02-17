const express = require("express");
const app = express();
const url = require('url');
const port = 3000; app.get('/fibonacci', (req, res) => {
  let digito = req.query.digito;
  let operacion = req.query.operacion;
  const fibonacci = {
    get operacion() {
      let numero1;
      let numero2;
      let contenedor=[numero1,numero2];
      for (let i = 0; i <= 30; i++) {
      let resultado = (numero1 + numero2);
      contenedor.push(resultado);
        numero1 = numero2;
        numero2 = resultado;
        if(digito % 2 == 0) {
          return resultado;
        }
        else{
          return resultado;
        }
      }
    }
  }
  res.json(fibonacci);
});

app.listen(port, () => console.log(`Escucha ${port}!`)); 