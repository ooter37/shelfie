import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.inventory)
        const mappedInventory = this.props.inventory.map(elem => {
            return (
                <Product
                console.log(elem)
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