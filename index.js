let counter = 0;

const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
    counter++;
    updateCounter();
});

decreaseButton.addEventListener("click", () => {
    counter--;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counter;
}
