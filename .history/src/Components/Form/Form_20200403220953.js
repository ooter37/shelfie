import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            img: '',
            formSelected: null
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
        this.priceChangeHandler = this.priceChangeHandler.bind(this)
        this.imgChangeHandler = this.imgChangeHandler.bind(this)
        this.resetButton = this.resetButton.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.getProduct = this.getProduct.bind(this)
    }

    componentDidUpdate(oldProps) {
        if (oldProps.selected !== this.props.selected) {
            this.getProduct(this.state.formSelected)
        } 
    }

    // getProduct(id) {
    //     axios.get(`/api/current/${id}`).then (res => {
    //         this.setState({
    //             name: res.data[0].name,
    //             price: res.data[0].price,
    //             img: res.data[0].img,
    //             // id: res.data[0].id
    //         })
    //     })
    // }
    getProduct() {
        this.setState({
            name: this.props.selected[0],
            price: this.props.selected[1],
            img: this.props.selected[2],
            formSelected: this.props.selected[3]
        })
    }

    updateProduct() {
        axios.put(`/api/update/${this.state.formSelected}`, {
            name: this.state.name,
            price: this.state.price,
            image: this.state.img
        }).then (res => {
            this.props.getInventory()
        }).catch(err => console.log(err))
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
                <button onClick={this.addProduct}>Add to Inventory</button>
                <button onClick={this.props.updateProduct}>Save Changes</button>
                <button 
                    onClick={this.resetButton}
                >Clear</button>
            </div>
        )
    }
}