
window.addEventListener("load", function(){
  
  var speedInput = document.querySelector("input[name=speed]")
  
  speedInput.addEventListener("change", function()
{document.getElementById("img").style.cssText = "-webkit-animation-duration: " + speedInput.value/1000 + "s;";

  });

});
