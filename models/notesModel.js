const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: { type: String, default: "untitled" },
  content: { type: String, required: true },
  important: { type: Boolean, default: false },
  date: Date,
});

notesSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const notesModel = mongoose.model("Note", notesSchema);

module.exports = notesModel;
