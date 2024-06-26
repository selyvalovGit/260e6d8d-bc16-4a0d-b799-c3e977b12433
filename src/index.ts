import { MongoClient } from 'mongodb';

const express = require('express');
const body = require('body-parser');

async function index() {
  try {

    const app = express();

    const mongo = await MongoClient.connect('mongodb://localhost:27017/Person');

    await mongo.connect();

    app.db = mongo.db();

    // body parser

    app.use(body.json({
      limit: '500kb'
    }));

    // Routes

    app.use('/persons', require('./routes/persons'));

    // Start server

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });

  }
  catch(error) {
    console.log(error);
  }
}

index();