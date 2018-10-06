const merge = require('lodash/merge')
const { ApolloServer, gql } = require('apollo-server')
const { Employee, employeeResolvers } = require('./gql/Employee')
const { Position, positionResolvers } = require('./gql/Position')

const resolvers = merge(employeeResolvers, positionResolvers)

const Query = gql`
  type Query {
    _empty: String
  }
`

const server = new ApolloServer({
  typeDefs: [Query, Employee, Position],
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
