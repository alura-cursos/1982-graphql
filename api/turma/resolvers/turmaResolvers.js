const turmaResolvers = {
  Query: {
    turmas: (_, __, { dataSources }) => dataSources.turmasAPI.getTurmas()
  }
}

module.exports = turmaResolvers