const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    notice: {
        type: String,
        required:true
    }
});

const notice = mongoose.model('NOTICE', noticeSchema);
module.exports = notice;