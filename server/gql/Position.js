const { gql } = require('apollo-server')
const service = require('../services/Position')
const employeeService = require('../services/Employee')

exports.Position = gql`
  extend type Query {
    position(id: Int!): Position
    positions: [Position]
  }

  type Position {
    id: Int
    title: String
    employees: [Employee]
  }
`

exports.positionResolvers = {
  Query: {
    positions: service.getAll,
    position: (position, { id }) => service.getById(id)
  },

  Position: {
    employees: position => employeeService.getByPosition(position.id)
  }
}
