require('sucrase/register/jsx')

const React = require('react');

const mainPage = (props) => {
    return (
    
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
        </head>
        <body>

            {props.post}
            
        </body>
        </html>
    )
} 

module.exports = mainPage;