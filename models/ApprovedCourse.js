const mangoose = require('mangoose');
const { Mongoose } = require('mongoose');

const ApprovedCourseSchema = new mangoose.ApprovedCourseSchema({
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
    createAt:{
        type: Date,
        default: Date.now
    }
});

const ApprovedCourse = Mongoose.model("ApprovedCourse", ApprovedCourseSchema);
module.exports = ApprovedCourse