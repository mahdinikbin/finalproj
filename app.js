const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errors");
const { setHeaders } = require("./middlewares/headers");

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

const app = express();

//* BodyPaser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(setHeaders);

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes

app.use("/users", require("./routes/users")); //login
app.use("/manager", require("./routes/manager.rout"));
app.use("/student", require("./routes/student.rout"));
app.use("/professor", require("./routes/professor.rout"));

//* Error Controller
app.use(errorHandler);


import React from 'react';
import TestPage from './components.js';

const App = () => {
  return (
    <div>
      <TestPage />
    </div>
  );
}

export default App;






























const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
