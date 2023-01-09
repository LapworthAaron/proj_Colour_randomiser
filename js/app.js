const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

function randonNumberGenerator() {
    return Math.floor((Math.random() * colours.length));
}

btn.addEventListener("click", function() {
    const randomNumber = randonNumberGenerator();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});