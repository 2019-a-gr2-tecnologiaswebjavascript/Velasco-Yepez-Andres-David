/**
 * LedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');

module.exports = {
  encenderLed: async (req,res)=>{
      const parametros = req.allParams();
      console.log(parametros);
      if(parametros.idLed){
          const url = 'http://localhost:1338/sensor/encenderLed';
          try {
            const respuesta = await axios.post(url, {idLed: parametros.idLed});
            console.log(respuesta);
            return res.ok({mensaje:'OK'});
          }catch (e) {
            console.log(e);
            return res.serverError({
                  error:500,
                  mensaje:'Error en servidor IOT'
              });
          }
      }else {
        return res.serverError({
          mensaje:'No envia idLed',
          error:400
        });
      }
  }

};

