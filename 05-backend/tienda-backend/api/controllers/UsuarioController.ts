/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
declare var  Producto;
import * as SkipperDisk from 'skipper-disk';

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
      const parametros = req.allParams();

      const opcionesCarga = {
        maxBytes:100000000,
        dirname:__dirname +'/../../archivos'

      };
      if(parametros.idProducto){
        req.file('imagen').upload(
          opcionesCarga,
          async (error, archivosSubidos) => {
            if (error) {
              return res.serverError(
                {
                  error: error,
                }
              );
            }
            const noeExistenArchivos = archivosSubidos.length === 0;
            if (noeExistenArchivos) {
              return res.badRequest({
                error: 400,
                mensaje: 'No envia ningun archivo'
              });
            } else {
              console.log(archivosSubidos);
              const archivo = archivosSubidos[0];
              // Logica Negocio
              // Guardar los metadatos del archivo
              // (ID PRODUCTO)
              try {
                const respuestaActualizar = await Producto.updateOne(
                  {id:parametros.idProducto}
                ).set({
                  tamanio: archivo.size,
                  descriptorArchivo:archivo.fd,
                  nombreArchivo:archivo.filename,
                  tipo:archivo.type,
                });
                return res.ok({
                  mensaje:`Se actualizo el producto ${parametros.idProducto}`
                })

              } catch (e) {
                return res.serverError({error: 500, mensaje: 'Error del servidor'});
              }

            }
          }
        )
      }else {
        return res.error({error:400,mensaje:'No envia id de producto'})
      }

      /*
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
            // Logica Negocio
            // Guardar los metadatos del archivo
            // (ID PRODUCTO)

            return res.ok(
              {
                mensaje:'TODO BIEN'
              }
            );
          }
        }
      )*/
    },
    download: async (req,res)=>{
      const parametros = req.allParams();
      if(parametros.idProducto){
        try {
          const productoEncontrado = await Producto.findOne(
            {id:parametros.idProducto});
          if(!productoEncontrado){
            return res.badRequest({error:404, mensaje:'No existe el producto'});
          }else {
            if(productoEncontrado.descriptorArchivo){
              //const adaptadorArchivo = SkipperDisk();
              res.set('Content-disposition', `attachment: filename='${productoEncontrado.nombreArchivo}'`);
              return res.download(productoEncontrado.descriptorArchivo,productoEncontrado.nombreArchivo);
              /*adaptadorArchivo.read(productoEncontrado.descriptorArchivo)
                .on(
                    'error',
                    (err)=>{
                      return res.serverError({
                        error:500,
                        mensaje:'No existe el producto',
                      });
                    }).pipe(res);*/
            }else {
              return res.badRequest({error:404, mensaje:'No existe el fd'});
            }
          }
        }catch (e) {
          console.log(e);
          return res.serverError(
            {
              error:400,
              mensaje:'No envia el id del Producto'
            }
          );
        }
      }else {
        return res.serverError(
          {
            error:400,
            mensaje:'No envia el id del Producto'
          }
        );
      }
    }
};

