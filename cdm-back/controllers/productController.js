
const { Product } = require('../models/index'); //requerir la tabla
//const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const productController = {//

    /* EJEMPLO ENDPOINT
     async TU NOMBRE DE ESTA FUNCION(req,res){
        const TU VARIABLE DE ESTA FUNCION = await TABLA.findAll <==METODO ({
        });
        res.send(TU VARIABLE DE ESTA FUNCION);
    },*/
    async productList(req,res){
        const products = await Product.findAll({
        });
        res.send(products);
    },
    productByUserId(req, res){
        let { id } = req.params;
        Product.findAll({ 
            include: [ 
                { model: User,
                    where: { id }
                }    
            ],
        })// agrupamos los pedidos en allOrders, y eso se lo pasamos a la funcion
        .then(allproducts => {
            res.send(allproducts)
         })
    },
   /* async newProduct(req, res){
        await Product.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            estado: req.body.estado,
            precio: req.body.precio,
            userId: req.body.userId
        })
       res.status(200).send({mensaje: 'Producto creado'})
    },*/
    async newProduct(req,res){
      try {
      // const hash = await bcrypt.hash(req.body.password,10)
       const product = await Product.create({
           ...req.body,
        //   password:hash
       })
        res.send(product);
        res.send
      } catch (error) {
       console.log(error)
       res.status(200).send({mensaje: 'Producto creado'})
      }
  }
}

module.exports = productController;