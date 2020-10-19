const { DataSource } = require('apollo-datasource')

const db = [
  {
    id: 1,
    descricao: "básico"
  },
  {
    id: 2,
    descricao: "intermediário"
  }
]

class TurmasAPI extends DataSource {
  constructor() {
    super()
    this.db = db
  }

  getTurmas(){
    return this.db
  }

  getTurma(id){
    return this.db.find(turma => turma.id === Number(id))
  }
}

module.exports = TurmasAPI