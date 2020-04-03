import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

deleteProduct(id) {
    axios.delete(`/api/delete/${id}`).then (res => {
        this.props.getInventory()
    })
}

    render() {
        // console.log(this.props.inventory)
        const mappedInventory = this.props.inventory.map(elem => {
            return (
                <div key={elem.id}>
                <Product
                    product={elem.name}
                    price={elem.price}
                    img={elem.img}
                    deleteproduct={this.deleteProduct}
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