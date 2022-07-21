import express from 'express'
import { rand } from './rand.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send({ hej: 'world' })
})

app.get('/:id', (req, res) => {
    res.send({ id: req.params.id, rand: rand() })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
