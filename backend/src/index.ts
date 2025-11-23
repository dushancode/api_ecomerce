// const express = require('express')
import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/products', (req, res) => {
    res.send("The list of Products")
});

app.post('/products', (req, res) => {
    res.send("add new Products")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// next   react-native   express 
// https://www.youtube.com/watch?v=RDM-nk5f4SE&list=PLWbd8KS5ML2m1voyl0cEa58mC8fDV0tCe