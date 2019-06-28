/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
declare var  Producto;
module.exports = {
    // req = peticion = request
    // res = respuesta = response

    saludar: async  (req, res)=>{
         const parametros = req.allParams();
         const nombre = parametros.nombre;
         console.log(parametros);
        if (nombre){
          try {
            const producto = await Producto.find({
              where:{
                id:1
              },
              skip:0,
              limit:5,
              sort:'id ASC'
            });
            console.log(producto);
            return res.ok(
              {
                mensaje:`${nombre}`,
                productoEncontrado:producto
              }
            );
          }catch (e) {
            console.log("error")
            return res.serverError(
              {
                error:500,
                mensaje:'Error del servidor'
              }
            );
          }


        }else {
          return res.serverError(
            {
              error:400,
              mensaje:'Peticion invalida'
            }
          );
        }
    },
    Upload:  (req, res) =>{
      const opcionesCarga = {
        maxBytes:100000000,
        dirname:__dirname +'/../../archivos'

      };
      req.file('imagen').upload(
        opcionesCarga,
        (error,archivosSubidos)=>{
          if(error){
            return res.serverError(
              {
                error:error,
              }
            );
          }
          const noeExistenArchivos = archivosSubidos.length === 0;
          if(noeExistenArchivos){
            return res.badRequest({
              error:400,
              mensaje:'No envia ningun archivo'
            });
          }else {
            console.log(archivosSubidos);
            return res.ok(
              {
                mensaje:'TODO BIEN'
              }
            );
          }
        }
      )
    }
};

