# React with Node.js

This is project for learning how to integrating Node.js with React

## Client Side

First, `npx create-react-app .` in your project to use React

Second, create setupProxy.js file in src directory

## Server Side

Create server directory

And create server.js file and route directory in server directory

## Install

You have to run this:./
# `npm install express`./
# `npm install http-proxy-middleware`./
# `npm install concurrently`./
# `npm install cors`./
# `npm install axios`./

if you want nodemon, you can run this:./
# `npm install nodemon`./

## package.json

you have to change package.json : "scripts" part

`"server": "nodemon ./server/server.js",`./
`"client": "npm run start",`./
`"dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\"",`./

## Edit

server/server.js./
server/route/index.js./
src/setupProxy./
src/App.js

## Run

you can run:

### `npm run dev`

you can find result in `client` 'localhos:3000' and `server` 'localhost:3001'