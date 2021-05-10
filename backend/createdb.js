var db = require('./models/index');

db.sequelize.sync({force:true}).then(async () => {
    await db.Cities.create()
    console.log('tables created')
}).catch(() => {
    console.log('could not create tables')
})