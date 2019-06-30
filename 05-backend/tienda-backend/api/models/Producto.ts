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
    arregloProductoUsuario:{
      collection:'ProductoUsuario', // modelo a relacionarse (HIJO)
      via:'fkProducto', //Nombre atributo FK (HIJO)
    }
  },

};
