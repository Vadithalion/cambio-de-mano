var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.productList);
router.get('/productByUserId/:id', productController.productByUserId);
router.post('/newProduct', productController.newProduct);





module.exports = router;