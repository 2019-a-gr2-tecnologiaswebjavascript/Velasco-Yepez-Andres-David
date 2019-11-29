/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  encenderLed:(req,res)=>{
    const parametros = req.allParams();
    if(parametros.idLed){
        console.log('Encendiendo led #', parametros.idLed);
        return res.ok(
          {
            mensaje:`Led #${parametros.idLed} encendido`,
          }
        );
    }else {
      return res.badRequest({
        mensaje:'No envia idLed',
        error:400
      });
    }
  }

};

