require('sucrase/register/jsx');

import React from 'react';

const notes = (props) => {
    return (
        <div>
            
        <form method="post" action="/notebook" name="notePost" id="notePost">
            <h1>Note page</h1>
            <input type="text" name="title" id="title"  ></input>
            <input type="text" name="thingsToDo" id="thingsToDo" ></input>
            <button type="submit" >add</button>
        </form>
        {props.thingsToDo}
        {props.title}
        {props.userName}
        </div>
        
    );
};

module.exports = { notes }