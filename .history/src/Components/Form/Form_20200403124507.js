import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            img: ''
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
        this.priceChangeHandler = this.priceChangeHandler.bind(this)
        this.imgChangeHandler = this.imgChangeHandler.bind(this)
        this.resetButton = this.resetButton.bind(this)
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
                <button>Add</button>
                <button
                    onClick={this.resetButton}
                >Clear</button>
            </div>
        )
    }
}