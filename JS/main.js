var squareCalculator = document.getElementById("square-input");
var squareButton = document.getElementById("square-button");

var halfNumberCalculator = document.getElementById("half-input");
var halfButton = document.getElementById("half-button");

var fraction = document.getElementById("percent1-input");
var whole = document.getElementById("percent2-input");
var floatFinder = document.getElementById("percent-button");

var areaCalculator = document.getElementById("area-input");
var areaButton = document.getElementById("area-button");
var solution = document.getElementById("solution");

squareButton.addEventListener("click", function () {
    solution.innerText = `Square of ${squareCalculator.value} = ${(Math.pow(squareCalculator.value, 2))}`;
})

halfButton.addEventListener("click", function () {
    solution.innerText = `Half of ${halfNumberCalculator.value} = ${(halfNumberCalculator.value / 2)}`;
})

floatFinder.addEventListener("click", () => {
    solution.innerText = (fraction.value / whole.value);
})

areaButton.addEventListener("click", function () {
    solution.innerText = `Area of circle is ${Math.round((Math.PI * Math.pow(areaCalculator.value, 2)))} (exactly ${(Math.PI * Math.pow(areaCalculator.value, 2))})`
})