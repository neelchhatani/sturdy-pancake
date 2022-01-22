status_cocossd = "";
function setup(){
canvas = createCanvas(480 , 380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function start(){
object_detector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "status: detecting objects";
}
function draw(){
image(video , 0 , 0 , 480 , 380);
}
function modelLoaded(){
console.log("Model is loaded!!!");
status1 = true;
}