import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
    }
    nameChangeHandler(e) {
        this.setState({
            name: e.target.value
        })
    }
    priceChangeHandler(e) {
        this.setState({
            name: e.target.value
        })
    }
    imgChangeHandler(e) {
        this.setState({
            name: e.target.value
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
        console.log(this.state)
        return (
            <div>form component
                <input 
                    name='productName'
                    value={this.state.name}
                    onChange={e => this.nameChangeHandler(e)}
                    placeholder='Product Name'
                    type='text'
                    ></input>
                <input
                    name='producePrice'
                    value={this.state.name}
                    onChange={e => this.priceChangeHandler(e)}
                    placeholder='Price'
                    type='text'
                ></input>
                <input
                    name='productImage'
                    value={this.state.name}
                    onChange={e => this.imgChangeHandler(e)}
                    placeholder='Image URL'
                    type='text'
                ></input>
                <button>Add</button>
                <button
                    onClick{() => {
                        this.state.resetButton
                    }}
                >Clear</button>
            </div>
        )
    }
}