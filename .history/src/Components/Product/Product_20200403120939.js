import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {product, price, img} = props
        console.log(this.props.productName)
        return (
            <div>
                <h1>{this.product}</h1>
                <span>{this.price}</span>
                <img src={this.img} alt='Product Image' height='100'/>
            </div>
        )
    }
}