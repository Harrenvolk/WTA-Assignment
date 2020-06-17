// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type: String
    },
    responsible: {
        type: String
    },
    description: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Unassigned'
    }
});

// export default mongoose.model('Issue', Issue);
module.exports = mongoose.model('Issue', Issue)