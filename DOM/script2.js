
//  Let's make that carousel auto-slide every few seconds—so it runs hands-free! 🌀


let current = 0;
let slides = document.querySelectorAll('.slide');
let stime = Date.now();

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
    let sec = Date.now() - stime ;
    if(sec >= 10000) return;

  current = (current + 1) % slides.length;
  showSlide(current);
}

// 🔥 Auto-slide every 3 seconds
setInterval(nextSlide, 2000);

// Show first slide initially
showSlide(current);





// let startTime = Date.now();


// function slider(index){
//     slides.forEach((img, i) => {
//         slide.classList.remove('active');
//         if(index===i) slide.classList.add('active')
//     });
// }

// function nextSlide(){
//     let seconds = Date.now()-startTime;
//     if(seconds>=6000) return;

//     current = (current+1) % slides.length;
//     slider(current);
// }


// setInterval(nextSlide, 1000);
// slider(current);



let arr = [
    'https://images.unsplash.com/photo-1744826874736-54ec3ff61a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1744826874736-54ec3ff61a7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1744062064909-67dbdfc7c314?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1744042829912-eae1e0e7dc73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D',

]

let img = document.querySelector('.img');
let i =0;
let idd = setInterval(function(){
    img.src = arr[i];
    // img.setAttribute('src', arr[i]); // this works also fine
    i = (i+1) % arr.length;
}, 2000);


setTimeout(function(){
    clearInterval(idd);
}, 20000);``