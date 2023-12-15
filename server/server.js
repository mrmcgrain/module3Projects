const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

require('./config/poke.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// const Routes = require('./routes/poke.routes');

// Routes(app);


const port = 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));

