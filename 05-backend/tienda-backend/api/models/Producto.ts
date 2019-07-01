/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombre:{
        type:'string',
        required:true,
      },
    codigo:{
        type:'string',
        required: true,
        unique:true,
    },
    tamanio:{
        type:'string'
    },
    descriptorArchivo:{
      type:'string'
    },
    nombreArchivo:{
      type:'string'
    },
    tipo:{
      type:'string'
    },
    arregloProductoUsuario:{
      collection:'ProductoUsuario', // modelo a relacionarse (HIJO)
      via:'fkProducto', //Nombre atributo FK (HIJO)
    }
  },

};

