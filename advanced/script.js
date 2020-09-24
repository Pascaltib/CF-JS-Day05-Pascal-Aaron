var bookArray = JSON.parse(books);

for(var i =0; i<bookArray.length;i++){
  
  //Here we type in the attributes of the book into the HTML ul and add HTML elements and class to it
  document.getElementById("display").innerHTML += `<p><img ${bookArray[i].image}><li class = paragraph${i}>Title: ${bookArray[i].title} </li> <li class = paragraph${i}>Author: ${bookArray[i].author}</li></p>`

  //Here we check if the book is read and change the li color to black or red
  if(bookArray[i].read =="true"){
    document.getElementsByClassName("paragraph"+i)[0].style.color = "black";
    document.getElementsByClassName("paragraph"+i)[1].style.color = "black";
  }
  else{
    document.getElementsByClassName("paragraph" +i)[0].style.color = "red";
    document.getElementsByClassName("paragraph" +i)[1].style.color = "red";
  }
}
