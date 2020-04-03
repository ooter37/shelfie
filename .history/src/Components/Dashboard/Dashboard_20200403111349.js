import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                dashboard component
                <Product/>

            </div>
        )
    }
}