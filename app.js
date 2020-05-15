const func = require('functions'),
    //bodyParser = require('body-parser')
    express = require('express'),
    app = express(),
    morgan = require('morgan'),

    members = [
        {
            id: 1,
            name: 'Jujlian'
        },
        {
            id: 2,
            name: 'Shrek'
        },
        {
            id: 3,
            name: 'jouj'
        }
    ]

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/v1/members/:id', (req, res) => {
    res.json(func.success(members[(req.params.id)-1].name))
})

app.get('/api/v1/members', (req, res) => {
    if (req.query.max != undefined && req.query.max > 0) {
        res.json(func.success(members.slice(0, req.query.max)))
    } 
    else if (req.query.max != undefined)
        res.json(func.error('Wrong maimum value'))
    else
        res.json(func.success(members))
})

app.post('/api/v1/members', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => console.log("Serveur lancé sur le port 3000"))
