song="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristY="";

function setup(){
    canvas = createCanvas(650, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 650, 500)
}

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();   
    song.setVolume(1);
    song.rate(1);
}

function modelloaded(){
    console.log("model loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristY = results[0].pose.rightWrist.y; 
        rightwristX = results[0].pose.rightWrist.x;

        console.log("Left Wrist X = "+leftwristX+" Left Wrist Y = "+leftwristY);
        console.log("Right Wrist X = "+rightwristX+" Right Wrist Y = "+rightwristY);
       }
}