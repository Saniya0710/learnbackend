//import http module
const http=require('http')

//create http server
const server=http.createServer((request, response)=>{
   // console.log(request.method)

    if(request.method == 'GET'){
        if(request.url === '/getusers')
        response.end('This response is for GET request from users')
        if(request.url === '/getproducts')
        response.end('This response is for GET request from products')
    }

    if(request.method == 'PUT'){
        response.end('This response is for PUT request')
    }
    
    if(request.method == 'POST'){
        if(request.url === '/createuser'){
            response.end("User created")
        }
        if(request.url === '/createproduct'){
            response.end("Product created")
        }
           
    }

    if(request.method == 'DELETE'){
        response.end("This response is for DELETE request")
    }
    //send response to client
   //S response.end("This is response from http server")
})

//assign port number
server.listen(3000, ()=>console.log("server listening on port 3000.."))