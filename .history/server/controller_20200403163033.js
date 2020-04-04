module.exports = {
    addProduct: (req,res,next) => {
        const db = req.app.get('db')
        db.add_product([req.body.name, req.body.price, req.body.image]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send('Problem with add product endpoint')
            console.log(err)
        })
    },
    getInventory: (req,res,next) => {
        const db = req.app.get('db')
        db.get_inventory().then(products => {
                res.status(200).send(products)
            }).catch(err => {
                    res.status(500).send('Problem with get inventory endpoint')
                    console.log(err)
                })
    },
    deleteProduct: (req,res,next) => {
        const db = req.app.get('db')
        db.delete_product(req.params.id).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send('Problem with delete product endpoint')
        })
    },
    currentProduct: (req,res,next) => {
        const db = req.app.get('db')
        db.get_product(req.params.id).then((product) => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Problem with get single product endpoint')
        })
    },
    updateProduct: (req,res,next) => {
        const db = req.app.get('db')
        db.update_product(req.params.id, [red.body.name, req.body.price, req.body.image]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send('Problem with update product endpoint')
            console.log(err)
        })
    }
}