const express = require("express");
const notesModel = require("../models/notesModel");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(async (req, res) => {
    const result =
      req.query.important === "true"
        ? await notesModel.find({ important: true })
        : await notesModel.find({});
    res.send(result);
  })
  .post(async (req, res) => {
    const note = req.body;
    const newNote = await notesModel.create({
      content: note.content,
      date: new Date(),
      important: note.important,
      title: note.title,
    });

    res.send(newNote);
  })
  .delete(async (req, res) => {
    const result = await notesModel.deleteOne({ _id: req.query.id });
    res.send(result);
  })
  .put(async (req, res) => {
    const note = req.body;
    const currentNote = await notesModel.findById(note.id);
    currentNote.title = note.title;
    currentNote.content = note.content;
    currentNote.important = note.important;
    let newNote = await currentNote.save();
    res.send(newNote);
  });

module.exports = userRouter;
