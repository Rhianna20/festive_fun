This project I will be creating a simple website using:

Javascript
Express
Node Js
React

To create a basic package json

run:

    npm init
    
npm install sucrase to complie non-standard language extension.


tutorial on how to create a postgres database:

https://www.robinwieruch.de/postgres-sql-macos-setup

1] Body-parser: This parses the body part of an incoming HTTP request and makes it easier to read POST parameters.

2] Cookie-parser: it is used to parse the cookie header data and populate req.cookies provides cookie information.

3] Debug: A small node debugging utility used after node core’s debugging technique.

4] Morgan: it’s HTTP request logger middleware for node app.

The scripts section defines a “start” script for bootstrap the application, which is what we are invoking when we call NPM Start to start the application server. From the script definition, you can see that this actually starts the JavaScript file ./bin/www with node starter. It also defines a “Devstart” script for running application.

what is www file?
In node application /bin/www file is the entry point of application. The first thing this does is require() the “real” application entry point because of it import the express() application object.

https://morioh.com/p/2f74a13be58d

crud : https://zellwk.com/blog/crud-express-mongodb/


mongodb set up: https://www.digitalocean.com/community/tutorials/how-to-integrate-mongodb-with-your-node-application