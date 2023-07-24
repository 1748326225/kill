window.addEventListener('load', function() {
  let jdt=document.querySelectorAll(".a");
  jdt[0].style.backgroundColor = "#8d83ff";
});
var i = 0;
setInterval(function () {
    i=i+1;
    if(i==3){
        i=0;
    }
    let jdt=document.querySelectorAll(".a");
    for (let j = 0; j < jdt.length; j++) {
      if (j === i) {
        jdt[j].style.backgroundColor = "#8d83ff";
      } else {
        jdt[j].style.backgroundColor = "";
      }
    }
}, 2000);

setInterval(function () {
    var img = document.getElementById("lunbo");
    img.style.marginLeft = -i * 340 + "px";
}, 2000);
