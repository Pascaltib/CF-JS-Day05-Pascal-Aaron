var carArr = JSON.parse(cars);
console.table(carArr);

for (var i = 0; i < carArr.length; i++) {
    document.getElementById("main").innerHTML += `<div id='car${i}'> <img ${carArr[i].Img} id='img${i}'> <br> <p> ${carArr[i].Model} </p> <div id='moreInfo${i}'></div></div>`;
}

//creating a variable to enable a if statement loop
var test = 2;

//changes the display size from small to big 
function expand(x) {
    document.getElementById("moreInfo" + x).innerHTML = `<p>Brand: ${carArr[x].Brand} </p>  <p>Model: ${carArr[x].Model} </p>
      <p>Year: ${carArr[x].Year} </p>  <p>Engine: ${carArr[x].Engine} </p> <p>Price: ${carArr[x].Price} </p>`;
      document.getElementById('img'+x).style.width = "24em";
      document.getElementById('img'+x).style.height = "30em";
    //   document.getElementById('img'+x).addEventListener('click', function(){
    //       if(test % 2 != 0){
    //         close(x);
    //         test++;
    //       }
          
    //       console.log(x);
    //   }, false);
}

function close(y){
    document.getElementById("moreInfo" + y).innerHTML = "";
    document.getElementById('img'+y).style.width = "12em";
    document.getElementById('img'+y).style.height = "15em";
    // document.getElementById("car" + y).innerHTML = `<img ${carArr[y].Img} id='img${y}'> <br> <p> ${carArr[y].Model} </p>`;
    /*document.getElementById("car"+ y).addEventListener('click', function(){
        expand(y);
        console.log(y);
    }, false);*/

}

//for every img in line 5 will expand them when clicked apon

for (let i = 0; i < carArr.length; i++) {
    document.getElementById("img" + i).addEventListener("click", function () {
        if(test % 2 == 0){
            expand(i);
            test++;
        }else {
            close(i);
            test++;
        }
        
    }, false);
}

