import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    category: String,
    question: String,
    incorrectAnswers: Array,
    correctAnswer: String,
});

export default mongoose.model('Question', questionModel);
