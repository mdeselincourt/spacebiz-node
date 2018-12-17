const serverlessMod = require('serverless-http')
const expressMod = require('express')
const spacebiz = expressMod()

spacebiz.get("/brief", (req,res) => {
		console.log(JSON.stringify(req.path));
		
		briefingList = [
			{
				"client": "US",
				"budget": 3000,
				"tonnage": 3000,
				"quantity": 1
			}
		]

		res.send(briefingList);
})

module.exports.handler = serverlessMod(spacebiz);

console.log("node-backend-entrypoint-spacebiz loaded");