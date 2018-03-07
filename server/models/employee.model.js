var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    name: String,
    position: String,
    office: String,
    salary: Number,
    updated_date: { type: Date, default: Date.now }
});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;