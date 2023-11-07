noseX=0; noseY=0; 
difference = 0;
 rightWristX = 0;
  leftWristX = 0;

function setup(){

video = createCapture(VIDEO)
video.size(550, 550)
canvas= createCanvas(550, 550);
canvas.position(560, 150)

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
console.log("poseNet piiiiiiiiiiiiiiiiiiaaaaaaaaaaaaaaaaauuuuuuuuuuuooooooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaip")
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
}
}
function draw(){
background("#bdf2bf");
rnr = Math.floor(Math.random() * 255) + 1;
 rng = Math.floor(Math.random() * 255) + 1;
 rnb = Math.floor(Math.random() * 255) + 1;
fill(rnr,rng,rnb)
square(noseX, noseY,100);
}
