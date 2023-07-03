const mangoose = require('mangoose');
const { Mongoose } = require('mongoose');

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