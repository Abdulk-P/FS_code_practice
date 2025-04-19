// function step1() {
//     console.log("Please wait, I am selecting the image...");
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Hey, image is selected");
//         resolve("selected image");
//       }, 4000);
//     });
//   }
  
//   function step2(image) {
//     console.log(`Please wait, I am adding filter to the ${image}...`);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Filter is applied");
//         resolve("filtered image");
//       }, 2000);
//     });
//   }
  
//   function step3(filter) {
//     console.log(`Please wait, I am adding caption to the ${filter}...`);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Caption is added");
//         resolve("captioned image");
//       }, 5000);
//     });
//   }
  
//   function step4(caption) {
//     console.log(`Please wait, I am uploading the ${caption}...`);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Image finally uploaded");
//         resolve();
//       }, 3000);
//     });
//   }
  
//   // Chain the promises
//   step1()
//     .then((image) => step2(image))
//     .then((filter) => step3(filter))
//     .then((caption) => step4(caption))
//     .catch((error) => console.error("Something went wrong:", error));
  


function promisess(){
    console.log("Hi this Defalut msg");
    return new Promise((resolve)=>{
        setTimeout(() =>{
            console.log("Hello after 1sec");
            resolve("Running from Step 1 function")
        }, 1000);
    });
}

function step1(msg){
    console.log(msg);
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("Hello There after 5s");
            resolve("Completed from step2 function")
            
        }, 5000);
    });
    
}

function step2(msg){
    console.log(msg);
    
}
//Promise Call back way

// promisess()
// .then((msg) => step1(msg))
// .then((msg) => step2(msg));


// Async and wait calling a function

async function callFns() {
    const stp1 = await promisess();
    console.log(stp1);

    const stp2 = await step1(stp1);

    const stp3 = await step2(stp2);
    
}

callFns();