const positions = [
  {
    id: 1,
    title: 'Front-End Developer'
  },
  {
    id: 2,
    title: 'Back-End Developer'
  }
]

module.exports = {
  all: () => positions,
  find: id => positions.find(e => e.id === id)
}
