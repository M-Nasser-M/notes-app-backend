const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { PORT, MONGODB_URI, MONGODB_PASSWORD } = require("./config/config");
const notesRouter = require("./Routes/Notes");

mongoose.connect(MONGODB_URI.replace("MONGODB_PASSWORD", MONGODB_PASSWORD));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
