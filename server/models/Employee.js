const employees = [
  {
    name: 'Brennen',
    email: 'brennen@homex.com',
    position: 1
  },
  {
    name: 'Byron',
    email: 'byron@homex.com',
    position: 2
  }
]

module.exports = {
  all: () => employees,
  where: (field, value) => employees.filter(e => e[field] === value),
  first: (field, value) => employees.find(e => e[field] === value)
}
