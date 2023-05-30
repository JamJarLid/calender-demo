import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/message', (req, res) => {
  res.send('Hello from the API!');
});

app.listen(3000, () => console.log('server running on port 3000'));