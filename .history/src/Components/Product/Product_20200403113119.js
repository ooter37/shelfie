import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>product component
                <h1>{this.props.product.name}</h1>
            </div>
        )
    }
}