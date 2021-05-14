const loadRandom = () => {
  fetch("http://localhost:5000/random")
    .then((response) => response.json())
    .then((randomJoke) => {
      const container = document.querySelector("#jokesList");
      container.innerHTML = `
                      <div class="random-joke">
                        <h3>${randomJoke.joke}</h3>
                      </div>`;
    });
};
