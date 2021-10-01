let express = require('express')
let app = express()

app.use("/", express.static('public'))

//http://localhost:8089/hello
app.get("/hello", (req,res)=>{
    res.send("<h1>Hello Express JS</h1>")
})

//http://localhost:8089/user?firstname=Pritesh&lastname=Patel
app.get("/user", (req,res)=>{
    let firstname = req.query["lastname"]
    let lastname = req.query.lastname

    response ={
        firstname,
        lastname
    }

    res.send(response)
})
//http://localhost:8089/user/Pritesh/Patel
app.post("/user/:firstname/:lastname",(req,res)=>{
    let firstname = req.params.firstname
    let lastname = req.params["lastname"]

    response={
        firstname,
        lastname
    }

    res.send(response)
})

let server = app.listen(8089, () => {
    console.log(server.address())
    let host = server.address().address
    let port = server.address().port
    console.log("server running at http://%s:%s", host, port)
})