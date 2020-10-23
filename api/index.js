const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const path = require('path')

const { userSchema, userResolvers, UsersAPI } = require('./user')
const { turmaSchema, turmaResolvers, TurmasAPI } = require('./turma')
const { matriculaSchema, matriculaResolvers, MatriculasAPI } = require('./matricula')

const typeDefs = mergeTypeDefs([userSchema, turmaSchema, matriculaSchema])
const resolvers = [userResolvers, turmaResolvers, matriculaResolvers]

const dbConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, './data/database.db')
  }
}

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
      turmasAPI: new TurmasAPI(dbConfig),
      matriculasAPI: new MatriculasAPI(dbConfig)
    }
  },
 })

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})