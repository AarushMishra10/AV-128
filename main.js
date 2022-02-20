LeftWristx=0;
LeftWristy=0;
RightWristx=0;
RightWristy=0;

function setup(){
    canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose ", gotPoses);
}
song1="";
song2="";
function draw(){
image(video, 0,0,600,500);
}

function preload(){
        song1= loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function platsong(){
    song1.play();
    song2.play();
}

function modelLoaded(){
    console.log("Model has been loaded");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        LeftWristx=results[0].pose.leftWrist.x;
    LeftWristy=results[0].pose.leftWrist.y;
    console.log("LeftWristx="+LeftWristx+" ,LeftWristy="+LeftWristy);
    RightWristx=results[0].pose.rightWrist.x;
    RightWristy=results[0].pose.rightWrist.y;
    console.log("RightWristx="+RightWristx+" ,RightWristy"+RightWristy);
    }
}