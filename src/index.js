const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${processs.env.DB_USER}:${process.env.DB_PASS}@cluster0.g4xsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect((err) => {
  const eventscollection = client.db("volunteer-network").collection("events");
  // perform actions on the collection object
  console.log(err);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
