import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            img: '',
            id: 0,
            add: true,
            edit: false
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
        this.priceChangeHandler = this.priceChangeHandler.bind(this)
        this.imgChangeHandler = this.imgChangeHandler.bind(this)
        this.resetButton = this.resetButton.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.getProduct = this.getProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    componentDidUpdate(oldProps, oldState) {
        if (oldProps !== this.props) {
            this.getProduct(this.props.selected)
        } 
    }

    getProduct(id) {
        axios.get(`/api/current/${id}`).then (res => {
            console.log(res.data)
            console.log(res.data[0].name)
            this.setState({
                name: res.data[0].name,
                price: res.data[0].price,
                img: res.data[0].img,
                id: res.data[0].id,
                add: false,
                edit: true
            })
        })
    }
    updateProduct(id) {
        axios.put(`/api/update/${id}`, {
            name: this.state.name,
            price: this.state.price,
            image: this.state.img
        }).then (res => {
            this.props.getInventory()
        })
    }
    addProduct() {
        axios.post('/api/product', {
            name: this.state.name,
            price: this.state.price,
            image: this.state.img
        }).then(res => {
            this.props.getInventory()
            this.resetButton()
        })
    }

    nameChangeHandler(e) {
        this.setState({
            name: e.target.value
        })
    }
    priceChangeHandler(e) {
        this.setState({
            price: e.target.value
        })
    }
    imgChangeHandler(e) {
        this.setState({
            img: e.target.value
        })
    }
    resetButton() {
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    render() {
        return (
            <div className='form-component'>
                <input 
                    name='productName'
                    value={this.state.name}
                    onChange={e => this.nameChangeHandler(e)}
                    placeholder='Product Name'
                    ></input>
                <input
                    name='producePrice'
                    value={this.state.price}
                    onChange={e => this.priceChangeHandler(e)}
                    placeholder='Price'
                ></input>
                <input
                    name='productImage'
                    value={this.state.img}
                    onChange={e => this.imgChangeHandler(e)}
                    placeholder='Image URL'
                ></input>
                <button hidden={this.state.edit} onClick={this.addProduct}>Add to Inventory</button>
                <button hidden={this.state.add} onClick={this.updateProduct(this.state.id)}>Save Changes</button>
                <button 
                    onClick={this.resetButton}
                >Clear</button>
            </div>
        )
    }
}