const { SQLDataSource } = require('datasource-sql')

class TurmasAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig)
  }

  async getTurmas() {
    return this.db 
      .select('*')
      .from('turmas')
  }


}

module.exports = TurmasAPI