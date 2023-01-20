//create express app

const { response } = require( 'express' )
const exp = require('express')
const app = exp();

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
