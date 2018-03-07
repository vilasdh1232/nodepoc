var express = require('express');
var Employee = require('./../models/employee.model');
var router = express.Router();


/* GET employees listing. */
router.get('/', function (req, res, next) {
  Employee.find((err, employees) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(employees);
  });
});

/* GET employees by id. */
router.get('/:employeeId', function (req, res, next) {
  Employee.findById(req.params.employeeId, (err, employee) => {
    if (err) return res.status(500).send(err)
    return res.status(200).send(employee);
  });
});


/* Add new employee. */
router.post('/', function (req, res, next) {
  const newEmployeeObj = new Employee(req.body);
  newEmployeeObj.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newEmployeeObj);
  });
});


/* Update employee. */
router.put('/:employeeId', function (req, res, next) {
  Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true }, (err, employee) => {
    if (err) return res.status(500).send(err);
    return res.send(employee);
  });
});

/* Delete employee by Id. */
router.delete('/:employeeId', function (req, res, next) {
  Employee.findByIdAndRemove(req.params.employeeId, (err, employee) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Employee successfully deleted",
      id: employee._id
    };
    return res.status(200).send(response);
  });
});

module.exports = router;
