const jokeBody = document.getElementById("joke");

const setUp = document.createElement("i");
jokeBody.appendChild(setUp);

const punchline = document.createElement("p");
jokeBody.appendChild(punchline);

const displayJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();
    setUp.innerHTML = joke.setup;
    punchline.innerText = joke.punchline;
}

displayJoke();