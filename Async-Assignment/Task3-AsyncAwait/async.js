let divEle = document.querySelector('.container');
let btnEle = document.querySelector('.btn-container');

async function fetchData() {
    divEle.innerHTML = "Loading....."
    btnEle.style.height = '100px'
    divEle.style.display = 'block';

    try {
        const response = await fetch("https://dummyjson.com/posts");
        const result = await response.json();

        const titles = result.posts.map((post) => post.title);

        // Display titles as a list
        divEle.innerHTML = "<h2>Post Titles</h2><ul>" + 
            titles.map(title => `<li>${title}</li>`).join('') +
            "</ul>";
    } catch (error) {
        divEle.innerHTML = "<p style='color:red;'>Failed to fetch data</p>";
        console.error("Error fetching posts:", error);
    }
}
