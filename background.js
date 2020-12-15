let angle = 0

let changeBackground = function () {
  angle = angle + 0.33
  
  document.body.style.backgroundImage = "linear-gradient(" + angle +"deg, #fdbcb4, #FFFF4D, #FF80D5)"
  
  window.requestAnimationFrame(changeBackground)
}

changeBackground()
