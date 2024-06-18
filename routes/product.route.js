const express = require('express');
const router = express.Router();

const Porduct = require('../models/product.model.js');

const {addProduct,getProducts,getSingleProduct,updateProduct,deleteProduct} = require('../controllers/product.controller.js');

router.get('/',getProducts);
router.post('/',addProduct);

router.get('/:id', getSingleProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;