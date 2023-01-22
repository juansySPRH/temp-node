const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Shitty')
        res.end()
    }
    if(req.url === '/about'){
        res.write('about shityy')
        res.end()
    }
})

server.listen(5000)