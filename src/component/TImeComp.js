import React, { Component } from 'react'

class TImeComp extends Component {
 constructor(props) {
     super(props)
     this.time=new Date().toLocaleString();
     this.state = {
        current_time:this.time 
     }
     setInterval(()=>{
        let new_time=new Date().toLocaleString();
        this.setState({current_time:new_time})},1000);

 }
   
    render() {
    
        return (
            <>
                <span>{this.state.current_time}</span>
            </>
        )
    }
}

export default TImeComp
