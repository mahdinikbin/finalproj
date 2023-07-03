const mangoose = require('mangoose');
const { Mongoose } = require('mongoose');

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