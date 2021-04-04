const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courseCode: {
        type:String,
        required: 'Title cannot be blank',
        unique: true
    },
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    section:{
        type:Number,
        required: "Section cannot be empty"
    },
    semester:{
        type:Number,
        required: 'Semester cannot be empty'
    },
    creator: {
        type:Schema.Types.ObjectId,
        unique: true,
        required: "Creator cannot be empty"
    }
});
mongoose.model('Course', CourseSchema);
