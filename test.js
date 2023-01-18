console.log("Hello i am javascripts")
const test=()=>{
console.log("test is called")
}

test()
//ASynchronous

console.log("customer-1 ordered biryani")
console.log("customer-2 ordered water bottle")

setTimeout(()=>{
    console.log("biryani delivered to customer-1")
}, 5000)

setTimeout(()=>{
    console.log("Waterbottle delivered to customer-2")
}, 1000)
