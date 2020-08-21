import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker';
import {TODO} from './../imports/api/todoDB';
import App from './../imports/ui/App'

Meteor.startup(() => {
 
  Tracker.autorun(() => {
    let listdb = TODO.find().fetch(); 
    let title = "To do List"
   

    ReactDOM.render(<App title={title} doList={listdb} />, document.getElementById('app'));
  })

  
  
});