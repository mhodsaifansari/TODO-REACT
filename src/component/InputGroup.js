import React, { Component } from 'react'

class InputGroup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:''
        }
    }
    

    render() {
        const addToList=this.props.addToList;
        const addHandler= ()=>
        {
            if(this.state.value!==null||this.state.value!==undefined||this.state.value!=='')
                {   addToList(this.state.value)

                
                }
        this.setState({value:''})
        }
       
        return (
            <div className="input-group">
                <form onSubmit={(event)=>{addHandler();event.preventDefault()}} className="input-form">
                <input type="reset" className="btn btn-clear" value="Clear" onClick={()=>{this.setState({value:''})}} ></input>
                <input type="text" className="input-text"placeholder="I will...." onChange={(event)=>{this.setState({value :event.target.value}) } } value={this.state.value}></input>    
                <input type="submit" className="btn btn-add"onClick={addHandler} value="Enter" ></input>
                </form>
            </div>
        )
    }
}

export default InputGroup
