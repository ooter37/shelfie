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
    render() {
        return (
            <div>form component
                <input></input>
                <input></input>
                <input></input>
                <button>Add</button>
                <button>Clear</button>
            </div>
        )
    }
}