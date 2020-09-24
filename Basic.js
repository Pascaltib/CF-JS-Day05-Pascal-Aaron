var friesObject = JSON.parse(fries);
var sandwichesObject = JSON.parse(sandwiches);

document.getElementById("main").innerHTML = " My favorite sandwich is a " + sandwichesObject.sandwich +" which has approximately " + sandwichesObject.calories +" calories. <br>";
document.getElementById("main").innerHTML += `Along with it I enjoy eating ${friesObject.fries_size} which have about ${friesObject.calories} calories.`
