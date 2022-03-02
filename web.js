/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let message = "Hello World!";
  if (req.body.sessionInfo.parameters.age){
    message = "if you were 10 years older, you would be "+ (req.body.sessionInfo.parameters.age+10);
  }
 
  
  res.status(200).send(message);
  
});

app.listen(process.env.PORT || 8080);

