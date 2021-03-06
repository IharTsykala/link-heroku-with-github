const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req,res)=> {
    res.end(`<div>
                <h1>Home page</h1>
                <a href="/about">About</a>
            </div>`)
})

app.get('/about', (req,res)=> {
    res.end(`<div>
                <h1>About page</h1>
                <a href="/">Home</a>
            </div>`)
})

app.listen(PORT, ()=>{
    console.log(`listen port: ${PORT}`)
})