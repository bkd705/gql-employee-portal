const Position = require('../models/Position')

module.exports = {
  getAll: () => {
    return Position.all()
  },
  getById: id => {
    return Position.find(id)
  }
}
