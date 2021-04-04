const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    added: {
        type: Date,
        default: Date.now
    },
    courseCode: {
        type: String,
        default:'',
        trim: true,
        required: 'courseCode cannot be blank'
    },
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'courseName cannot be blank'
    },
    section: {
        type: String, default: '',
        trim: true,
        required: 'section cannot be blank'
    },
    semester: {
        type: String, default: '',
        trim: true,
        required: 'semester cannot be blank'
    },
    students:{
        type: [Schema.ObjectId],
        ref: 'Student'
    }
});
mongoose.model('Course', ArticleSchema);
