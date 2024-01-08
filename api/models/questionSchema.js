import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    question: String,
    incorrectAnswers: Array,
    correctAnswer: String,
});

export default mongoose.model('Question', questionModel);
