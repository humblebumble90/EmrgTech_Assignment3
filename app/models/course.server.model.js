const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    courseCode: {
        type: String,
        trim: true,
        required: ' cannot be blank'
    },
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'cannot be blank'
    },
    section: {
        type: String, default: '',
        trim: true,
        required: ' cannot be blank'
    },
    semester: {
        type: String, default: '',
        trim: true,
        required: ' cannot be blank'
    },
    student:{
        type: Schema.ObjectId,
        ref: 'Student'
    }
});
mongoose.model('Course', ArticleSchema);
