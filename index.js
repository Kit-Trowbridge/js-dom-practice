const body = document.querySelector("body");

const addRecipe = (title, steps) => {
    const recipeTitle = document.createElement("p");
    recipeTitle.innerText = title;
    body.appendChild(recipeTitle);

    const recipeSteps = document.createElement("ol");
    body.appendChild(recipeSteps);

    steps.forEach((step) => {
        const stepItem = document.createElement("li");
        stepItem.innerText = step;
        recipeSteps.appendChild(stepItem);
    })
}

const teaSteps = 
    [
        "Boil water", 
        "Place teabag in mug", 
        "Pour boiled water in mug",
        "Stir in milk",
        "Enjoy! :)"
    ]

addRecipe("Breakfast Tea", teaSteps);


// const response = await fetch("https://official-joke-api.appspot.com/random_joke");
// const joke = await response.json();

// console.log(joke);

// // await is only valid in async functions and the top level bodies of modules

const logJoke = async () => {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();
    console.log(joke.setup, joke.punchline);
}

logJoke();