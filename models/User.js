const mangoose = require('mangoose');
const { Mongoose } = require('mongoose');


const UserSchema = new mangoose.UserSchema({
    fullname:{
        type: String,
        required: true,
        trim: true,
    },
    id:{
        type: Number,
        required: true,
        length: 8,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlenght: 4,
        maxlenght: 255,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: Number,
        required: true,
        length: 11,
        unique: true,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

const User = Mongoose.model("User", UserSchema);
module.exports = User


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


const ProfessorSchema = new mangoose.ProfessorSchema({
    College:{
        type: String,
        required: true,
    },
    field:{
        type: String,
        required: true,
    },
    order:{
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

const Professor = Mongoose.model("Professor", ProfessorSchema);
module.exports = Professor


const EducationalManagerSchema = new mangoose.EducationalManagerSchema({
    College:{              
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

const EducationalManager = Mongoose.model("EducationalManager", EducationalManagerSchema);
module.exports = EducationalManager


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