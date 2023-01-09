const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

function randonNumberGenerator() {
    const colourArray = ["#"];
    for (var i = 1; i <= 6; i++) {
        colourArray[i] = hex[Math.floor((Math.random() * hex.length))];
    }
    return colourArray.join("");
}

btn.addEventListener("click", function() {
    const randomNumber = randonNumberGenerator();
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    colour.textContent = randomNumber;
});