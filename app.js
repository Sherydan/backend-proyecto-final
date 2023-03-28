const app = require('./server')

app.use('/', require('./src/routes/privateRoutes'))




module.exports = app