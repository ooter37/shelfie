import React from 'react'

export default class Product extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    render() {
        const {product, price, img} = this.props
        return (
            <div>
                <h1>{product}</h1>
                <span>{price}</span>
                <img src={img} alt='Product' height='100'/>
            </div>
        )
    }
}