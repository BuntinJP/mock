import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Handle all types of HTTP methods
app.all('/*', (req, res) => {
  console.log(`Endpoint: ${ req.path }`);
  console.log(`Method: ${ req.method }`);
  console.log(`Body: ${ JSON.stringify(req.body) }`);
  console.log('Status: 200');

  res.status(200).send('OK');
});

const port = 3000;
app.listen(port, () => console.log(`Mock server listening at http://localhost:${ port }`));
