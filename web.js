const express = require('express');
const app = express();

app.get(req, res) => {
  const tag = req.body.fulfillmentInfo.tag;
  let message = tag || req.query.message || req.body.message || 'Hello World!';
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
});

app.listen(process.env.PORT || 8080);
