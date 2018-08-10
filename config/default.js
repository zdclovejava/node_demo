module.exports = {
  port: 3000,
  session: {
    secret: 'userscret',
    key: 'userkey',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
}
