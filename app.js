const app = require('./server')

app.use('/', require('./src/routes/storeRoutes'))
app.use('/', require('./src/routes/usersRoutes'))
app.use('/', require('./src/routes/addSalesRoutes'))



module.exports = app