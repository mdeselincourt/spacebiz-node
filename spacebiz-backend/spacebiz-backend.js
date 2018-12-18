// This is for deployment to AWS Lambda and therefore the required packages must be locally installed and deployed to Lambda

const serverlesshttp = require('serverless-http');
const express = require('express');
const spacebiz = express();

spacebiz.get("/", (req,res) => {    // Define Express spacebiz's response to a GET / as an anonymous function
	console.log("Handling GET /");
	res.send("Hello world");
})

module.exports.handler = serverlesshttp(spacebiz); // Wrap my Express in Serverless and expose it (for Lambda to find)

console.log("node-backend-entrypoint-spacebiz loaded");