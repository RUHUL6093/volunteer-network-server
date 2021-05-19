const express = require('express')
const app = express()
const cors =require('cors')
app.use(cors());
const port = 5000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log(process.env.DB_USER)
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<volunteer-user>:<volunteer1234>@cluster0.g4xsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)