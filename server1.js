const user = {
    Name : "Anisha",
    age : 19,
}

const http = require ("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    const method = req.method; const url = req.url;

    if (method ==="GET" && url ==="/user") {
        res.writeHead(200, {"Content-Type":"text/plain" });
        res.end(JSON.stringify(user));
    }
    else if(method === "POST" && url === "/user"){
        let body = " "
           req.on("data", (chunk) => {
             body += chunk;
            })
         req.on("end", () => {
             fs.writeFile("dat.txt",body,() =>{
                 res.writeHead(200)
                 res.end("done");
                })
            })
        
    }
});



server.listen(3000,() => {
    console.log("Server is running")
})





