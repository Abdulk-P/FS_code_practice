// Simulate a 5-second delay using a Promise
function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}



// Fetch with timeout: will reject if not completed within 5 seconds

function fetchWithTimeout(url, timeout = 5000) {
    return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
        reject(new Error("Operation timed out."));
    }, timeout);

    fetch(url)
        .then(response => {
        clearTimeout(timer);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
        })
        .then(resolve)
        .catch(reject);
    });
}
let btnELe = document.querySelector('.btn-container');

function handleClick() {
    document.body.style.backgroundColor = "pink";
    btnELe.style.height = "100px";

    const divEle = document.getElementById("postContainer");
    divEle.style.display = "block";
    divEle.innerText = "Wait 5 seconds...";

    divEle.scrollIntoView({ behavior: "smooth", block: "start" });

    delay(5)
    .then(() => {
        divEle.innerText = "Loading posts...";
        return fetchWithTimeout("https://dummyjson.com/posts", 5000);
    })
    .then(data => {
        const ul = document.createElement("ul");
        ul.style.paddingLeft = "20px";

        data.posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            ul.appendChild(li);
        });

        divEle.innerHTML = "<strong>Posts:</strong>";
        divEle.appendChild(ul);
    })

    .catch(error => {
        divEle.innerText = "Error: " + error.message;
    });
}