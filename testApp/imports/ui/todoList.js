import React from 'react'
import Todo from '././todo'

export default class TodoList extends React.Component{
    renderTodo(){

        if(this.props.doList.length === 0){
            return <p>Add your To Do list</p>
        }
        else{
            return this.props.doList.map((dl) =>{
                return <Todo key={dl._id} liste={dl}/>
              })  
        }


        
    }

    render() {
        return (
            <div>
                {this.renderTodo()}
            </div>
        );
    }
}
