// let colorBtn = document.getElementById("colorButton");
// const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
// let colorIdx = 0;

// colorBtn.addEventListener("click", () => {
//   document.body.style.backgroundColor = colors[colorIdx];
//   colorIdx = (colorIdx + 1) % colors.length;
// });

// jQuery

  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  var colorIndex = 0;

  $("#colorButton").click(function() {
    $("body").css("background-color", colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
  });
