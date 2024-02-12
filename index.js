process.nextTick(()=>{console.log("tick is executed")})

setTimeout(()=>{
    console.log("time out executed")
})

Promise.resolve().then(()=>{
console.log("promise execution done")
})

console.log("end of programme")
