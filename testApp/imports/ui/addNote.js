import React from 'react'
import {TODO} from './../api/todoDB'




export default class AddNote extends React.Component {
    handleSubmit = (event) => {
        let p = event.target.todoString.value;
        let d = event.target.dueDate.value;
        event.preventDefault();
    
        if(p && d){
          event.target.todoString.value = '';
          TODO.insert({
            todo: p,
            date: d,
            complete: false
          });
        }
    };

    


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="todoString" placeholder="Input Todo"/>
                    <input type="date" name="dueDate" placeholder="Input the due date"/>
                    <button>Add Note</button>
                </form> 

             
               
            </div>
        )
    }
}