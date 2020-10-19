
const turmaResolvers = {
  Query: {
    turmas: (_, __, { dataSources }) => dataSources.turmasAPI.getTurmas(),
    turma: (_, { id }, { dataSources }) => dataSources.turmasAPI.getTurma(id)
  }
}

module.exports = turmaResolvers