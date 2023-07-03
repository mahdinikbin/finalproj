const mangoose = require('mangoose');
const { Mongoose } = require('mongoose');

const CourseSchema = new mangoose.CourseSchema({
    name:{              
        type: String,
        required: true,
    },
    prerequisite:{              
        type: String,
        required: true,
    },
    need:{              
        type: String,
        required: true,
    },
    unit:{              
        type: Number,
        required: true,
    },
    time:{
        type: Date,
    },
    exam:{
        type: Date,
    },
    examplace:{
        type: String,
    },
    Professor:{
        type: String,
    },
    examplace:{
        type: String,
    },
    Capacity:{
        type: Number,
    },
    term:{
        type: Number,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

const Course = Mongoose.model("EducationalManager", CourseSchema);
module.exports = Course