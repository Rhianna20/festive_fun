require('sucrase/register/jsx');

import React from 'react';

const notes = () => {
    return (
        <div>
        <form method="post" action="/" name="notePost" id="notePost">
            <h1>Note page</h1>
            <input type="text" name="title" id="title" ></input>
            <input type="text" name="thingsToDo" id="thingsToDo"></input>
            <button name="add">add</button>
            <button name="edit">edit</button>
            <button name="delete">delete</button>
        </form>
        </div>
    );
};

module.exports = { notes }