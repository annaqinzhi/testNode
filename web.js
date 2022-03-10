
const express = require('express')
// will use this later to send requests
const http = require('http')
// import env variables
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.status(200).send('Server is working.')
})

app.listen(port, () => {
	console.log(`🌏 Server is running at http://localhost:${port}`)
})

app.post('/getage', (req, res) => {
          const tag = req.body.fulfillmentInfo.tag;
	  let message = tag || req.query.message || req.body.message || 'Hello World!';
	  if (req.body.sessionInfo.parameters.ageinput){
	    message = "if you were 10 years older, you would be "+ (req.body.sessionInfo.parameters.ageinput+10);
	  }

	  const jsonResponse = {
	      fulfillment_response: {
		messages: [
		  {
		    text: {
		      //fulfillment text response to be sent to the agent
		      text: [message],
		    },
		  },
		],
	      },

	  };

	  res.status(200).send(jsonResponse);
})

