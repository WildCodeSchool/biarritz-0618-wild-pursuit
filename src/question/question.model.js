const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  theme: String,
  question: String,
  response: String,
  responses: [String],
});

// -------------------------------
// HACK to avoid redeclaration of the model
// SEE : https://github.com/dherault/serverless-offline/issues/258#issuecomment-363324002
global.questionSchema =
  global.questionSchema || mongoose.model('Question', questionSchema);
module.exports = global.questionSchema;
