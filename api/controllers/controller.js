import Questions from "../models/questionSchema.js";

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
// export async function insertQuestions(req, res){
//     try {
//         Questions.insertMany( function(err, data){
//             res.json({ msg: "Data Saved Successfully...!"})
//         })
//     } catch (error) {
//         res.json({ error })
//     }
// }

/** add multiple questions using insertMany */
export async function addQuestions(req, res){
    try {
        // Assuming that the request body contains an array of questions
        const questionsArray = req.body;

        // Validate that the request body is an array
        if (!Array.isArray(questionsArray)) {
            return res.status(400).json({ error: 'Invalid request format. Expecting an array of questions.' });
        }

        // Extract relevant properties from the array of questions
        const questionsToInsert = questionsArray.map(questionData => ({
            question: questionData.question,
            incorrectAnswers: questionData.incorrectAnswers,
            correctAnswer: questionData.correctAnswer,
        }));
        

        // Use insertMany to insert the array of questions into the database
        const insertedQuestions = await Questions.insertMany(questionsToInsert);

        // Send the array of inserted questions as a JSON response
        res.json(insertedQuestions);
    } catch (error) {
        // If an error occurs during the operation, send an error response
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
