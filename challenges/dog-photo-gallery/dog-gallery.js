const button = document.getElementById("button");
const unorderedList = document.getElementById("list");
const lists = document.createElement("li");
unorderedList.appendChild(lists);
const images = document.createElement("img");
lists.appendChild(images);
lists.style.listStyle = "none";

button.addEventListener("click", getImages);

function getImages() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((result) => {
      //console.log(result);
      images.src = result.message;
    })
    .catch((err) => {
      console.log("Failed to load image", err);
    });
}
