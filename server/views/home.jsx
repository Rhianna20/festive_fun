require('sucrase/register/jsx');

import React from 'react';

const home = () => {
    return (
 
   <html lang="en">
   <head>
       <meta charSet="UTF-8"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <title>Document</title>
   </head>
   <body>
       <h1>Digital NoteBook</h1>
       <form method="/get" >
         <h4>Enter name here</h4>
       <input type='text' name='userName'></input>
       <button>Enter</button>
       </form>
   </body>
   </html>
    )
};



module.exports = { home }