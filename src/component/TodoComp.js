

import React, { Component } from 'react'

 class TodoComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              edit:0,
              comment:'Add a Comment',
              editTitle:0,
              title:this.props.value
              
         }
         this.myref=React.createRef();
         this.inital=0;
         
     }
    selectHandler=()=>{
        if(this.myref.current!=null&&this.inital===0)
        { console.log(this.myref.current)
        this.myref.current.focus();
        this.myref.current.select();
        this.inital=1;
        }
    }
    eventHandler=(event)=>{
        this.setState({comment:event.target.value})
    }
    componentDidUpdate()
    {this.selectHandler()}
    render() 
     {
        const toggle=()=>{
            if(this.state.edit===0)
            {this.setState({edit:1});
            }
            else
            {
                this.setState({edit:0});
            }
           };
    
        
       const {doneHandler,id,removeHandler,editHandler} = this.props;
       
       let edittitle=(<div>
                         <input type="text" value={this.state.title} onChange={(e)=>{this.setState({title:e.target.value})}} ></input>
                         <button onClick={()=>{editHandler(id,this.state.title); this.setState({editTitle:0})}} className="todo-btn " style={{marginRight:"0.2rem",marginLeft:'0.5rem'}}>Save</button>
                         <button onClick={()=>{this.setState({editTitle:0})}} className="todo-btn" style={{marginRight:"0.5rem"}}> Close</button>
                         </div>)
       let comment=(<div className="comment-box">
                        <pre className="comment">{this.state.comment}</pre>
                        <div className="comment-time">
                           <span>{this.props.time}</span>  
                           <button onClick={()=>{this.setState({edit:2});}} className="todo-btn" style={{marginTop:"0.5rem"}}>Edit</button>
                        </div>
                        
                       
                    </div>);
       let edit_comment=(<div className='edit-comment'>
                 <textarea ref={this.myref} placeholder='Enter Comment' style={{resize:"none"}} value={this.state.comment} onChange={this.eventHandler} />
                 <button onClick={()=>{this.setState({edit:1})}}>Save</button>

             </div>)
        this.selectHandler();
        return (

            <>
            <div className="todo-box">
                <div className="todo-box-top">
                    <span>
                        {this.state.editTitle===0?<>{this.state.title}<sup style={{fontSize:"0.51rem",marginLeft:"0.4rem",cursor:"pointer"}} onClick={()=>{this.setState({editTitle:1}) }}>edit</sup></>
                        :
                        edittitle}
                        
                    </span>
                    <span onClick={toggle} style={{fontSize:"0.71rem",cursor:"pointer"}}>{this.state.edit===0?"More":"Less"}</span>
                </div>
                
                {this.state.edit===0?
                    '':
                        this.state.edit===1?
                            comment:
                            edit_comment
                            
                    }
                
                <div>
                    <button onClick={(event)=>{
                    // event.target.addClass('todo-box-shirk'); 
                    //
                    
                    
                    event.target.parentElement.parentElement.classList.add('todo-box-shrink-remove');
                    event.target.parentElement.parentElement.onanimationend=()=>{removeHandler(id)};
                   console.log()
                    }} className="todo-btn todo-btn-remove">Remove</button>
                    <button onClick={(event)=>{
                    // event.target.addClass('todo-box-shirk'); 
                    //
                    
                    
                    event.target.parentElement.parentElement.classList.add('todo-box-shrink-done');
                    event.target.parentElement.parentElement.onanimationend=()=>{doneHandler(id)};
                   console.log()
                    }} className="todo-btn todo-btn-done">Done</button>
                </div>  
              </div>
              
            </>
        )
    }
}

export default TodoComp
