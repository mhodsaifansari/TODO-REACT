
import './App.css';
import InputGroup from './component/InputGroup';
import React, { Component } from 'react'
import TodoComponent from './component/TodoComp';
import TImeComp from './component/TImeComp';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todo:[],
       done:0,
       key:0
    }

  }
  addToList=(list_value)=>
            { if(list_value!=='')
              {
              let list_todo=this.state.todo;
              list_todo.push({value:list_value,key:this.state.key,time: (new Date()).toLocaleString()});
              console.log(list_todo);
              this.setState({todo:list_todo,key:this.state.key+1})
              }
              localStorage.setItem('listItem',JSON.stringify(this.state));
              }
  doneHandler=(key)=>{
                        let new_list=this.state.todo.filter((value)=>{return value.key!==key})
                        this.setState({todo:new_list,done:this.state.done+1})
                        localStorage.setItem('listItem',JSON.stringify(this.state));
                      }
  removeHandler=(key)=>{
                      let new_list=this.state.todo.filter((value)=>{return value.key!==key})
                        this.setState({todo:new_list})
                        localStorage.setItem('listItem',JSON.stringify(this.state));
                      }
  editHandler=(key,value)=>{
                        let listitems=this.state.todo;
                        let data=listitems.find((value)=>{return value.key===key});
                        data.value=value;
                        let index=listitems.findIndex((value)=>{return value.key===key});
                        listitems.splice(index,1,data);
                        this.setState({todo:listitems});
                      }
  componentDidMount()
  {
    if(localStorage.getItem('listItem')!==undefined)
    { let listItem='';
      try
      {
        listItem=JSON.parse(localStorage.getItem('listItem'));
        this.setState(listItem);
      }
      catch
      {
        console.log('error in parsing LocalStorage');
      }
    }
  }
  render() {
    const list_todo=this.state.todo.reverse().map((task)=>{return(<TodoComponent value={task.value} key={task.key} doneHandler={this.doneHandler} id={task.key} removeHandler={this.removeHandler} time={task.time} editHandler={this.editHandler}></TodoComponent>)})
    return (
      <div className="App">
      <div className="nav">
        <h2>Todo List</h2>
        <span>
          <div>Date: <TImeComp/></div>
          <div>Done {this.state.done}</div>
        </span>
      </div>
      <div className="pre">
      <div className="main">
        
        <InputGroup addToList={this.addToList}/>
        <div className="list">
          {list_todo}
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default App;
