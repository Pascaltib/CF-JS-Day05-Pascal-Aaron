var carArr = JSON.parse(cars);
//console.table(carArr);

//creates and displays the JSON content into the html file
for (var i = 0; i < carArr.length; i++) {
    document.getElementById("main").innerHTML += `<div id='car${i}'> <img ${carArr[i].Img} id='img${i}'> <br> <p> ${carArr[i].Model} </p> <div id='moreInfo${i}'></div></div>`;
}

//creating a variable to enable a if statement loop
var test = 2;

//changes the display size from small to big 
function expand(x) {
    document.getElementById("moreInfo" + x).innerHTML = `<p>Brand: ${carArr[x].Brand} </p>  <p>Model: ${carArr[x].Model} </p>
      <p>Year: ${carArr[x].Year} </p>  <p>Engine: ${carArr[x].Engine} </p> <p>Price: ${carArr[x].Price} </p>`;
      document.getElementById('img'+x).style.width = "30em";
      document.getElementById('img'+x).style.height = "24em";
    
}

function close(y){
    document.getElementById("moreInfo" + y).innerHTML = "";
    document.getElementById('img'+y).style.width = "15em";
    document.getElementById('img'+y).style.height = "12em";
    
    //the reason why this didn't work, is because we redecleared the image, making it invisible to the for loop (even though it has the same name again) making it not have the event lister to expand
    // document.getElementById("car" + y).innerHTML = `<img ${carArr[y].Img} id='img${y}'> <br> <p> ${carArr[y].Model} </p>`;
    

}

//for every img in line 5 will expand them when clicked apon
//for is executed once, but the event listener is always there and reacting to the if (test) statement
for (let i = 0; i < carArr.length; i++) {
    document.getElementById("img" + i).addEventListener("click", function () {
        //this if statment makes sure, that we can repeat the event also after it has been executed x ammounts of time
        if(test % 2 == 0){  
            expand(i);
            test++;     //will add +1 to the test value making it uneven 
        }else {
            close(i);
            test++;     //makes it even again, there fore the for function can be executed again
        }
        
    }, false);
}

