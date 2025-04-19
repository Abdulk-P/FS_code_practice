function changeText(){
    document.getElementById("demo").innerText = "You clicked?"
}
function togglebtn() {
    let p = document.getElementById("info");
    if (p.style.visibility === "hidden") {
        p.style.visibility = "visible";
    } else {
        p.style.visibility = "hidden";
    }
}


function changeBg() {
    let colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}


//------------------query selector----------------

let para1 = document.querySelector('.para');


//getters

console.log(para1.innerText);  //innerText brainFull read css Properties

console.log(para1.textContent);  //textContent (brainLess) -> can't read css properties

console.log(para1.innerHTML);  //shows tags as well

//setters

document.querySelector('.para').innerText = "abdul";

document.querySelector('.para1').innerHTML = "abdul from inner htmll setters";

document.querySelector('.para2').textContent = "abdul from textConten setters";



//-------------------attribute selector and setters to attribute value

let ab = document.querySelector('h2');
//getters
console.log(ab.getAttribute('class'));
console.log(ab.getAttribute('id'));


//setters
ab.setAttribute("class", "abdul is FullStack developer")



// ----carousel code images slideer


// let current = 0;
// let slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === index) slide.classList.add('active');
//     });
// }

// function nextSlide() {
//     current = (current + 1) % slides.length;
//     showSlide(current);
// }

// function prevSlide() {
//     current = (current - 1 + slides.length) % slides.length;
//     showSlide(current);
// }

// showSlide(current);
