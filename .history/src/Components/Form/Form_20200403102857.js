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


    render() {
        return (
            <div>form component
                <input 
                    name='name'
                    value={this.state.name}
                    onChange={e => this.nameChangeHandler(e)}
                    placeholder='Product Name'
                ></input>
                <input></input>
                <input></input>
                <button>Add</button>
                <button>Clear</button>
            </div>
        )
    }
}