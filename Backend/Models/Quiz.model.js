import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        Title:{type:String,required:[true,"Title is Required"]},
        T_Questions:{type:Number,required:[true,"T_Questions is Required"]},
        Quiz_Detail:{type:mongoose.Schema.Types.ObjectID,required:[true,"user id 1 req"],ref:"QuizDetail"},
    }
)

const Quiz = new mongoose.model('Quiz',quizSchema)
export default {Quiz}