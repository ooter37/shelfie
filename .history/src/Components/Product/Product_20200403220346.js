import React from 'react'

export default class Product extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    render() {
        const {name, price, img, deleteProduct, id, setSelected} = this.props
        return (
            <div className='product-component'>
                <h1>{name}</h1>
                <span>{price}</span>
                <img src={img} alt='Product' height='100'/>
                <button
                    onClick={() => {
                        deleteProduct(id)
                    }}
                >delete</button>
                <button
                    onClick={() => {
                        setSelected([name, price, img, id])
                    }}
                >edit</button>
            </div>
        )
    }
}