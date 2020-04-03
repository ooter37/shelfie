import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }



    const mappedInventory = props.inventory.map(product => {
        return (
            <Product/>
        )
    })
    render() {
        return (
            <div>
                dashboard component
                {mappedInventory}

            </div>
        )
    }
}