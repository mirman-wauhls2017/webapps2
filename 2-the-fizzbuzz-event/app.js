function fizzBuzz(n) {
    var ul = document.getElementById("holder")
    ul.innerHTML = "";
    for (i = 0; i <= n; i++) {
        var newLi = document.createElement("li");
        if (i % 15 == 0) {
            newLi.innerHTML = "FizzBuzz!";
            newLi.setAttribute("style", "font-weight:bold; color:black")
        } else if (i % 3 == 0) {
            newLi.innerHTML = "Fizz!";
            newLi.setAttribute("style", "color:maroon;font-style:italic");
        } else if (i % 5 == 0) {
            newLi.innerHTML = "Buzz!";
            newLi.setAttribute("style", "color:orange;text-decoration:underline");
        } else {
            newLi.innerHTML = i;
            newLi.setAttribute("style", "color:purple;")
        }
        ul.appendChild(newLi);
      }
}
var field = document.getElementById("field");
field.addEventListener("input", function(){
  fizzBuzz(parseInt(this.value));
});


// Any other functions your app requires
