import React from 'react'
import {TODO} from './../api/todoDB';


export default class Todo extends React.Component{

    

    render(){
        return (
            
            <p key={this.props.liste.todo}>
             <table>
                 <tr>
                    <th>To Do</th>
                    <th>Completed</th>
                    <th>Remove</th>
                    <th>Due Date</th>
                 </tr>
                 <tr>
                     <td>
                        <a href={"https://www.google.com/search?q=" + this.props.liste.todo} target="_blank">{this.props.liste.todo}</a>                         
                 
                     </td>
                     <td><input type="checkbox" onClick={() => TODO.update({_id: this.props.liste._id},{$set: {complete: true}})} ></input>  </td>
                     <td><button onClick={() => TODO.remove({_id: this.props.liste._id}) }>X</button> </td>
                     <td> {this.props.liste.date}       </td>
                 </tr>
                 
             </table>
               
               
            </p>
          )
    }
}