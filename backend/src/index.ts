// const express = require('express')
import express, { Router, json } from "express";
import productRoutes from './routes/products/index'
const app = express()
const port = 3000

const router = Router();
app.use(json());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});


// ENDPOINTS


app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// next   react-native   express 
// https://www.youtube.com/watch?v=RDM-nk5f4SE&list=PLWbd8KS5ML2m1voyl0cEa58mC8fDV0tCe