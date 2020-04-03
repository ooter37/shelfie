import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.productName)
        return (
            <div>
                <h1>{this.props.product}</h1>
                <span>{this.props.price}</span>
                <img src={this.props.img}/>
            </div>
        )
    }
}