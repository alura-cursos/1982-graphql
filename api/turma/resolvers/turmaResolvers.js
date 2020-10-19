const turmas = [
  {
    id: 1,
    descricao: "básico"
  },
  {
    id: 2,
    descricao: "intermediário"
  }
]

const turmaResolvers = {
  Query: {
    turmas: (parent, args, context, info) => turmas
  }
}

module.exports = turmaResolvers