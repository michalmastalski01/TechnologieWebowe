var i = 0;
var txt = 'We Design and Develop';
var speed = 50; // The speed/duration of the effect in milliseconds

typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}