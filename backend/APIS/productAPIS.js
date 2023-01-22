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

// //to create product using promise
// productApp.post('/create-product', (request, response)=>{


//     //get prodctCollectionObject
//     let productCollectionObject = request.app.get("productCollectionObj")

//     //get product obj from req
//     let productObj = request.body;

//     //insert productObj
//    productCollectionObject.insertOne(productObj)
//    .then(result=>response.send({message:'product creating successfuly'}))
//    .catch(err=>console.log("err in creating product", err))

// })


//to create product using async n await
productApp.post('/create-product', async(request, response)=>{


    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObj")

    //get product obj from req
    let productObj = request.body;

    //insert productObj
    let result=await productCollectionObject.insertOne(productObj)

    //send response
    response.send({message: 'product created successfully'})

})



//export productApp
module.exports=productApp;






