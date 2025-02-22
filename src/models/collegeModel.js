const mongoose = require('mongoose');
const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: "name is requried",
        trim: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: "Full name is requried",
        unique: true,
        trim: true
    },
    logoLink: {
        type: String,
        url: String,
        required: "url is required",
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })
module.exports = mongoose.model('College', collegeSchema)

