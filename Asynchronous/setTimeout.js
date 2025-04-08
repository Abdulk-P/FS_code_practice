//setTimeout is a WebAPi which allows us to execute code after some delay
//js is single threaded synchronous language but use of callbacks, promises, event loop, it can behave asynchronous


setTimeout(() =>{
    console.log("this is settimeout function, its is delayed to 2s")
}, 2000);