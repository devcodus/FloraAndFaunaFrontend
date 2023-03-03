import React, { Component } from 'react'
import Modal from '../components/Modal';

export default class Home extends Component {
    constructor(){
        console.log('I was constructed')
        super();
        this.state =  {
            name: 'David'
            
        }
    }

    componentDidMount(){
        console.log('I mounted')
    }

    

    render() {
        return (
            <div>
            <h1>This is the home page of {this.state.name}</h1>
            <p>{this.props.age}</p>
            <button onClick={this.props.happyBirthday}>+</button>

            <p>{this.props.test}</p>
            <p>{this.props.x}</p>
            <Modal triggerButtonText='Yerr' modalTitle='Testing'/>

            </div>
        )
    }
}
