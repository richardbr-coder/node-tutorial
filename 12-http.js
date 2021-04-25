const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('About our history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find your page</p>
    <a href="/">Back home</a>
    `)
    
})
 
server.listen(5000)

