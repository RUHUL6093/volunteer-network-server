const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 5000;

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g4xsc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect((err) => {
  const eventsCollection = client.db("volunteer-network").collection("events");

  app.get("/events", (req, res) => {
    eventsCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  // perform actions on the collection object
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
