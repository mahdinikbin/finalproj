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

