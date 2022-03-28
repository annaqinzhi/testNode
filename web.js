const express = require('express')
// will use this later to send requests
const http = require('http')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.status(200).send('Server is working.')
})

app.listen(port, () => {
	console.log(`🌏 Server is running`)
})

app.post('/', function (req, res) {
let message = req.query.message || req.body.message || 'Hello World!';
  if (req.body.sessionInfo.parameters.age){
    message = "if you were 10 years older, you would be "+ (req.body.sessionInfo.parameters.age+10);
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
