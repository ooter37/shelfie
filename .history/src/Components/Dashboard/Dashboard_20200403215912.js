import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

deleteProduct(id) {
    axios.delete(`/api/delete/${id}`).then (res => {
        this.props.getInventory()
    }).catch(err => console.log(err))
}

    render() {
        // console.log(this.props.inventory)
        const mappedInventory = this.props.inventory.map(elem => {
            return (
                <div key={elem.id}>
                <Product
                    name={elem.name}
                    price={elem.price}
                    img={elem.img}
                    deleteProduct={this.deleteProduct}
                    id={elem.id}
                    setSelected={this.props.setSelected}
                />
                </div>
            )
        })
        return (
            <div>
                dashboard component
                {mappedInventory}

            </div>
        )
    }
}