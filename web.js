
exports.calculateAge = (req, res) => {
  const tag = req.body.fulfillmentInfo.tag;
  let message = tag || req.query.message || req.body.message || 'Hello World!';
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
});

