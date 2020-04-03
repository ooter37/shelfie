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
        db.delete_product().then()
    }
}