import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {product, price, img} = this.props
        console.log(this.props.productName)
        return (
            <div>
                {/* <h1>{product}</h1>
                <span>{price}</span>
                <img src={img} alt='Product Image' height='100'/> */}
            </div>
        )
    }
}