const { gql } = require('apollo-server')
const service = require('../services/Employee')
const positionService = require('../services/Position')

exports.Employee = gql`
  extend type Query {
    employee(email: String!): Employee
    employees: [Employee]
  }

  type Employee {
    name: String
    email: String
    position: Position
  }
`

exports.employeeResolvers = {
  Query: {
    employees: service.getAll,
    employee: (root, args) => service.getByEmail(args.email)
  },

  Employee: {
    position: employee => {
      return positionService.getById(employee.position)
    }
  }
}
