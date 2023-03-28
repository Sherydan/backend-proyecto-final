const app = require('./server')

app.use('/', require('./src/routes/privateRoutes'))

app.use('/', require('./src/routes/storeRoutes'))
app.use('/', require('./src/routes/usersRoutes'))



module.exports = app