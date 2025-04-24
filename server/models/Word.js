const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  english: { type: String, required: true },
  turkish: { type: String, required: true },
  cardType: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
