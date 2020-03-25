import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class Timer extends Component {

    state = {
        Started : true,
        Hours : 0,
        Minutes :0,
        Seconds :0
    }
    handleStart = () =>{
        this.setState({ Started:!this.state.Started})
        if(this.state.Started)
        {
           this.timer=setInterval(() =>{this.setState({Seconds: this.state.Seconds+1})
           if(this.state.Seconds >=60)
           {
               this.setState({Minutes :this.state.Minutes +1, Seconds: 0})
           }
           if(this.state.Minutes >=60)
           {
               this.setState({Minutes :this.state.Minutes +1, Seconds: 0})
           }
        },1000)
           
        }
        else{
            clearInterval(this.timer)
        } 
    }
    handleReset = () => {
        this.setState({ Hours: 0, Minutes: 0, Seconds: 0 ,Started:true});
        clearInterval(this.timer)
      };
    render() {
        return (
            <div className='container'>
                <div>
                <h1>{this.state.Hours.toString().padStart(2, "0") + ':' + this.state.Minutes.toString().padStart(2, "0") + ':' + this.state.Seconds.toString().padStart(2, "0")}</h1>
                <p><span>Hour</span><span>Minute</span><span>Second</span></p>
                </div>
                <div className='btn-container'>
                <Button variant={this.state.Started ? "outline-success" : "outline-danger"} className="btn" onClick={this.handleStart }>{this.state.Started?'Start':'Stop'}</Button>         
                <Button variant="outline-warning" className="btn" onClick={this.handleReset}>Reset</Button>
                </div>
            </div>
        )
    }
}