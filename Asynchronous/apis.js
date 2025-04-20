//Promise using to fetch a data through a api

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     return resp.json();
// })
// .then(function(data){
//     console.log(data);
    
// })



// async to fetch data from api

// async function name(params) {
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let data2 = await data.json();
//     console.log(data2);
    
    
// }

// name();


//using axios for fetching a data

// import axios from "axios";

// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     console.log(resp.data);
    
// });


// using axios to fecth the github data

// let usrnms = function(name){
//     axios.get(`https://api.github.com/users/${name}`)
//     .then(function(resp){
//     // console.log(resp.data);
//         console.log(`the number of followers of ${resp.data.login} is ${resp.data.followers}`);
//         console.log(`the number of following of ${resp.data.login} is ${resp.data.following}`);
//     });
// }

// usrnms("Abdulk-P");
// usrnms("alokiit");
// usrnms("Samarth0606");




// using the fetch to fetch the github data throuhg api

//learned this while practing
// In your fetch() code, you're not converting the response to JSON before accessing the data, 
// and data is not defined in that .then() block.




// let usrnms2 = function(name){
//     fetch(`https://api.github.com/users/${name}`)
//     .then(function(resp){
//         return resp.json(); // Convert response to JSON
//     })
//     .then(function(data){
//         console.log(`the number of followers of ${data.login} is ${data.followers}`);
//         console.log(`the number of following of ${data.login} is ${data.following}`);
//     });
// }

// usrnms2("Abdulk-P");
// usrnms2("alokiit");
// usrnms2("Samarth0606");


//using the Promises to fetch the data from github using the apis


// let usrnms3 = async function(name){
//     let apis = await fetch(`https://api.github.com/users/${name}`)
//     let data = await apis.json();
//     // console.log(resp.data);
//         console.log(`the number of followers of ${data.login} is ${data.followers}`);
//         console.log(`the number of following of ${data.login} is ${data.following}`);
    
// }

// usrnms3("Abdulk-P");
// usrnms3("alokiit");
// usrnms3("Samarth0606");


let apicall = function(){
    fetch("https://dummyjson.com/posts")
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            console.log(data.posts['title']);
        })
}

apicall();