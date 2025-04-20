let btnELe = document.querySelector('.btn-container');

function delay5s() {
    btnELe.style.height = "100px";
    const divEle = document.getElementById("postContainer");

    divEle.style.display = "block";
    divEle.innerText = "Wait 5 seconds...";

    // Scroll to the div element
    divEle.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      divEle.innerText = "Callback executed after 5 seconds";

      fetch("https://dummyjson.com/posts")
        .then(resp => resp.json())
        .then(data => {
          const ul = document.createElement('ul');
          ul.style.paddingLeft = "20px";

          data.posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            ul.appendChild(li);
          });

          divEle.innerHTML = "<strong>Posts:</strong>";
          divEle.appendChild(ul);
        })
        .catch(err => {
          divEle.innerText = "Error fetching post titles: " + err;
        });
    }, 5000);
  }