import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.productName)
        return (
            <div>product component
                <h1>{this.props.productName}</h1>
            </div>
        )
    }
}