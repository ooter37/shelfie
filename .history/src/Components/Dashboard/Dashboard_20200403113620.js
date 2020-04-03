import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const mappedInventory = this.props.inventory.map(elem => {
            return (
                <Product
                productName={this.elem}
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