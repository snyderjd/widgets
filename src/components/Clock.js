import React from 'react';
import { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDateTime: Date()
        }
        
        this.tick = this.tick.bind(this);
    }
    
    tick = () => {
        this.setState({ currentDateTime: Date() })
    }

    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    render() {
        
        return (
            <div className="clock">
                <h1 className="clock-heading">Clock</h1>
                <div className="clock-dataContainer">
                    <h4>Time: {new Date(this.state.currentDateTime).toLocaleTimeString()}</h4>
                    <h4>Date: {new Date(this.state.currentDateTime).toLocaleDateString()}</h4>
                </div>
            </div>
        )
    }
}

export default Clock;