// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
/* eslint no-console: 0 */
// require("dotenv").config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import OrganizationRouter from './routes/OrganizationRouter';
// import passport from 'passport';

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost/eff-that')
  .then(() => console.log('[mongoose] Connected to MongoDB'))
  .catch(() => console.log('[mongoose] Error connecting to MongoDB'));

const app = express();

// const authenticationRoutes = require("./routes/AuthenticationRoutes");

app.use(bodyParser.json());

app.use(OrganizationRouter);

// Take care of CORS issues
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Take care of errors
// eslint-disable-next-line
app.use((error, request, response, next) => {
  return response.status(500).send('Uh oh, something went wrong! ' + error);
});

// app.use(authenticationRoutes);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
