//setTimeout is a WebAPi which allows us to execute code after some delay
//js is single threaded synchronous language but use of callbacks, promises, event loop, it can behave asynchronous


// setTimeout(() =>{
//     console.log("this is settimeout function, its is delayed to 2s")
// }, 2000);

// console.log("start");

// setTimeout(function(){
//     console.log("i will run after 0s");
    
// }, 0);

// console.log("end");




// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function showMessages() {
//     console.log("Start");

//     await wait(4000);
//     console.log("Hello after 4 seconds selceted img");
//     await wait(2000);
//     console.log("Hello after 2 seconds, applied filter to img");
//     await wait(3000);
//     console.log("Hello after 2 seconds, added caption");
//     console.log("End");
//   }
  
//   showMessages();
 // function step1(fn){
//     console.log("Please wait i am selecting image...");
//     setTimeout( function(){
//         console.log("image selected")
//         fn("selected image")
//     } , 4000 )  
// }
// function step2(image , fn){
//     console.log(`please wait adding filter to ${image}...`);
//     setTimeout(function(){
//         console.log("image is filtered");
//         fn("filtered image")
//     } , 2000)
// }
// function step3(filter , fn){
//     console.log(`please wait adding caption to ${filter}...`);
//     setTimeout(function(){
//         console.log("caption is added");
//         fn("captioned image")
//     } , 5000)
// }
// function step4(caption){
//     console.log(`please wait uploading the ${caption}`);
//     setTimeout(function(){
//         console.log("image finally uploaded");
//     } , 3000)
// }

// // callback hell (nesting of cb fn)
// step1( function(image){
//     step2(image , function(filter){
//         step3(filter , function(caption){
//             step4(caption)
//         } )
//     } )
// } )



// ------------------------------------------



// s1 -> s2 -> s3 -> s4

function step1(fn){
  console.log("please wait i am selecting the image...");
  setTimeout( function(){
      console.log("hey image is selected");
      fn("selected image") 
  } , 4000 ) 
}
function step2(image , fn){
  console.log(`please wait i am adding filter to the ${image}...`);
  setTimeout( function(){
      console.log("filter is applied");
      fn("filtered image")
  } , 2000 ) 
}
function step3(filter , fn){
  console.log(`please wait i am adding caption to the ${filter}...`);
  setTimeout( function(){
      console.log("caption is added");
      fn("captioned image")
  } , 5000 )
}
function step4(caption){
  console.log(`please wait i am uploading the ${caption}`);
  setTimeout(function(){
      console.log("image finally uploaded");
  } , 3000)
}


// callback hell => nesting of cb fn
step1( function(image){    
  step2(image , function(filter){
      step3(filter , function(caption){
          step4(caption)
      } )
  } )
} )