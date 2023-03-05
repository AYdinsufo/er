song1="";
song2="";
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw(){
image(video,0,0,600,500);
}
function modelloaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
    }
}