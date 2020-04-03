import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const mappedInventory = this.props.inventory.map(product => {
            return (
                <Product
                productName={this.product}
                />
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