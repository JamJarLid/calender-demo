import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/message', (req, res) => {
  res.send('Hello from the API!');
});

app.listen(port, () => console.log('server running on port 3000'));