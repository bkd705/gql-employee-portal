const Employee = require('../models/Employee')

module.exports = {
  getAll: () => {
    return Employee.all()
  },
  getByEmail: email => {
    return Employee.first('email', email)
  },
  getByPosition: position => {
    return Employee.where('position', position)
  }
}
