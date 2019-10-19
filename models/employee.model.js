const mongoose = require('mongoose');


var employeeSchema = new mongoose.Schema({
    Bad_Idea1: {
        type: String,
    },
    Genre: {
        type: String
    },
});
mongoose.model('Employee', employeeSchema);
