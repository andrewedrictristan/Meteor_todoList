import React from 'react'

import TodoList from './todoList'
import AddNote from './addNote';


export default class App extends React.Component{
    render() {
        return (
            <div>
                    <h1>TODO LIST</h1>
                    <TodoList doList={this.props.doList}/>
                    <AddNote/>
            </div>
        )
    }
}