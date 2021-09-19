const content = document.getElementById("content");

function getFetchComic() {
  fetch("https://xkcd.now.sh/?comic=latest").then((response) =>
    response
      .json()
      .then((data) => {
        console.log(data);
        const displayComic = document.createElement("img");
        content.appendChild(displayComic);
        displayComic.src = data.img;
      })
      .catch((err) => console.log(err))
  );
}
getFetchComic();
