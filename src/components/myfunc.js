/*Responsive Menu*/
function myFunction() {
  var x = document.getElementById("root1");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default myFunction;
