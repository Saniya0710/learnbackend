//create express app

const { response } = require( 'express' )
const exp = require('express')
const app = exp()

//to extract body of request object
app.use(exp.json())

//create a middleware1
const middleware1 = (request, response, next)=>{

    console.log("Middleware-1 executed");

    
    //forward req to next
   next()
}


// const middleware2 = (request, response, next)=>{
//     console.log("Middleware2 is executed")
// next()

// }



//use middleware1 
// app.use(middleware1)
// app.use(middleware2)





//Fake users data
let users=[
    {
        id:1,
        name:'ravi',
        age:23
    },
    {
        id:2,
        name:'Saniya',
        age: 22
    }
]

//Create user API Routes


//create route to handle '/getusers' path

app.get('/getusers', middleware1,(request, response)=>{
    response.send({message:"all users", payload: users});
});

//create route to handle '/getuser/id' path

app.get('/getuser/:id', (request, response)=>{
   
    //get url param
    let userId = request.params.id;

    //search user obj by id
    let userObj = users.find(userObj => userObj.id == userId)
    if(userObj === undefined){
        response.send({message: "user not exist"})
    }
    else{
        response.send({message:"User found", payload: userObj});
    }
})

//create a route to 'create-user'

app.post('/create-user', (request, response)=>{

    //get user obj from client
    let newUser = request.body;
    users.push(newUser)
    response.send({message:"New user created"})
})

 
//create a route to modify user data
app.put('/update-user', (request, response)=>{
    
    //get modified user obj
    let modifiedObj = request.body;

    //logic to modify existing user
    //send response
})

//create a route to delete user by id
app.delete('/remove-user/:id', (request, response)=>{
    //get id of user to remove
    let userId = (+request.params.id);

    //logic to identify and remove
    response.send({message: "data is deleted"})
})



//PRODUCT API routes


//get products
app.get('/getproducts', (request, response)=>{
    response.send({message:"all products"})
})

//get product by id
app.get('/getproduct/:id', (request, response)=>{
    response.send({message: `product with id ${request.params.id}`})
})

//to create product
app.post('/create-product', (request, response)=>{
    response.send({message: "product is created"})
})









//handling invalid path
app.use((request, response,next)=>{
    response.send({message: `path ${request.url} is invalid`})
})

//error handling middleware
app.use((error, request, response, next)=>{
    response.send({message: "Error occured",reason: `${error.message}`})
})


//assing port number
app.listen(4000, ()=>console.log('server listening on port 4000...'))
