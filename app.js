const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const router = require('./routers')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'))

app.use(session({
    secret: 'generasi peduli sesama',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})