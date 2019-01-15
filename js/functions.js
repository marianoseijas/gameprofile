//function randombg(){
  var random= Math.floor(Math.random() * 3) + 0;
  var bigSize = ["url('../img/bg1.jpg')",
                 "url('../img/bg2.jpg')",
                 "url('../img/bg3.jpg')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}
