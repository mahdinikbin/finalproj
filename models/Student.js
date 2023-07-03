const mangoose = require('mangoose');
const { Mongoose } = require('mongoose');

const StudentSchema = new mangoose.StudentSchema({
    grade:{
        type: String,
        required: true,
    },
    entryyear:{
        type: Number,
        required: true,
        length: 4,
    },
    Incomingsemestere:{
        type: String,
        required: true,
    },
    average:{
        type: Number,
        required: true,
    },
    College:{
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

const Student = Mongoose.model("Student", StudentSchema);
module.exports = Student