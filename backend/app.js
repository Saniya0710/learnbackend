//create express app

const { response } = require( 'express' )
const exp = require('express')
const app = exp();
const mclient=require("mongodb").MongoClient;

//DB connection URL
const DBurl = "mongodb+srv://Saniya:saniya123@cluster0.e0zeff0.mongodb.net/?retryWrites=true&w=majority"

//connect with mongoBB server
mclient.connect(DBurl)
.then((client)=>{

    //get DB object
    let dbObj=client.db("vnr2023db");
   
    //create collection objects
    let userCollectionObj = dbObj.collection("usercollection");
    let productCollectionObj = dbObj.collection("productcollection")
    
    //sharing collection objects to APIs
    app.set("userCollectionObj", userCollectionObj)
    app.set("productCollectionObj", productCollectionObj);

})
.catch(err=>console.log('Error in DB connection', err))

//import userApp and productAPp
const userApp=require('./APIS/userAPIS');
const productApp=require('./APIS/productAPIS')

app.use('/user-api', userApp)
app.use('/product-api', productApp)






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
