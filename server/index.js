const express = require('express')
require('dotenv').config();
const connectDB = require('./db/connect')
const cors = require("cors");
const routes = require("./routes/routing")
const app = express();

app.use(express.json());
// app.use(helmet());
app.use(cors("*"));

// routes
app.use( '/', routes);


const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();