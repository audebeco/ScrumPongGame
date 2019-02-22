import env from 'common-env'

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  express: {
    port: 3001
  },
  postgres: {
    user: 'ping',
    host: '127.0.0.1',
    database: 'pong',
    password: 'innovation',
    port: 5432
  }
})