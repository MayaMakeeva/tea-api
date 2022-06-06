const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const tea = {
    'oolong':{
        'type': 'black',
        'origine': 'China',
        'waterTemp': 90,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknownn',
        'origine': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flavor': 'unknown'
    },
    'matcha':{
        'type': 'green',
        'origine': 'The store',
        'waterTemp': 100,
        'steepTimeSeconds': 60,
        'caffinated': true,
        'flavor': 'tasty'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})