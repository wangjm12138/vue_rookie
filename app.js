const http = require('http')


const server = http.createServer()


server.on('request', function (req, res){

    const url =req.url
    if (url == '/getscript'){
        var scriptStr = 'show()'
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

server.listen(3000, function () {
    console.log("server listening at http://127.0.0.1:3000")

})
