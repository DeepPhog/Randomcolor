var submit = document.getElementById("submit");
var random = document.getElementById("random");
random.onclick = function randomcolor() {
  var randomnum1 = Math.round(Math.random() * 255);

  var randomnum2 = Math.round(Math.random() * 255);

  var randomnum3 = Math.round(Math.random() * 255);

  colorchange.style.background =
    "rgb" + "(" + randomnum1 + "," + randomnum2 + "," + randomnum3 + ")";
  console.log(randomnum1, +randomnum2, +randomnum3);
};
submit.onclick = function getcolor() {
  var color = document.getElementById("text").value;
  console.log(color);
  var bgc = document.querySelector(".colorchange");
  console.log(bgc);

  colorchange.style.background = color;
};
