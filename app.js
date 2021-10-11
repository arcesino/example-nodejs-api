const express = require('express')

const model = require('./lib/model')

const app = express()
const port = 3000

app.get('/products', async (req, res) => {
  return model.listProducts()
    .then(products => {
      res.json(products)
    })
    .catch(error => res.status(500).json({error}))
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params

  return model.getProduct(id)
    .then(product => {
      if (product) res.json(product)
      else res.status(404).send("Product Not Found")
    })
    .catch(error => res.status(500).json({error}))
})

app.listen(port, () => {
  console.log(`Products API listening at http://localhost:${port}`)
})
