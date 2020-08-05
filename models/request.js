const { Schema, model } = require('mongoose');

const requestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "superadmin"]
    },
    username: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Requests', requestSchema);