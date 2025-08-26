const express = require('express')
const app = express()
const { products } = require('./data')

app.get('./', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params

    const singleProduct = products.find(
        (products) => product.id === Number(productID)
    )
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }

    console.log(singleProduct)
    res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    res.status(200).json(sortedProducts)
    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Server listening to port 5000...')
})