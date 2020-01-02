const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());
// .env configuration
require('dotenv').config();

// listen for request
const port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log(`Magic happens on port ${port}`);

  mongoose.Promise = global.Promise;
  mongoose.connect(
    process.env.MLAB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
      if (err) console.error(err);
      else console.log('Connected to Database');
    }
  );
});
