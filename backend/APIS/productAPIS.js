//create a special route to handle product reqs
const exp=require('express');
const productApp = exp.Router();





//to extract body of request object;
productApp.use(exp.json())

//get products
productApp.get('/getproducts', (request, response)=>{
    response.send({message:"all products"})
})

//get product by id
productApp.get('/getproduct/:id', (request, response)=>{
    response.send({message: `product with id ${request.params.id}`})
})

//to create product
productApp.post('/create-product', (request, response)=>{
    response.send({message: "product is created"})
})

//export productApp
module.exports=productApp;






