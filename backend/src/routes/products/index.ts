import express, { Router } from "express";
import {
    listProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
} from "./productController";

const router = Router();

// router.get('/products', (req, res) => {
//     res.send("The list of Products")
// });

// router.get('/products/:id', (req, res) => {
//     console.log(req.params);
//     res.send(" a Product")
// });

router.get('/', listProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

// router.post('/products', (req, res) => {
//     res.send("add new Products")
// })

export default router;