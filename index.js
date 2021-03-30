const express = require('express');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// console.log(process.env.DB_USER);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dzoti.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookCollection = client.db("bookshops").collection("books");
  app.post('/addBooks',(req,res)=> {
      const books = req.body;
      console.log(books);
  })
//   console.log({err});
  console.log("Database connected successfully");
});


app.listen(port, () => {
  console.log(`Book app listening at http://localhost:${port}`)
})