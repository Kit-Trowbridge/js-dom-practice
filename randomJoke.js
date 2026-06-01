const jokeBody = document.getElementById("joke-body");
const jokeBtn = document.getElementById("joke-btn");

const setUp = document.createElement("i");
jokeBody.insertBefore(setUp, jokeBtn);

const punchline = document.createElement("p");
jokeBody.insertBefore(punchline, jokeBtn);

const displayJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();
    setUp.innerHTML = joke.setup;
    punchline.innerText = joke.punchline;
}

jokeBtn.addEventListener("click", () => {
    displayJoke();
})