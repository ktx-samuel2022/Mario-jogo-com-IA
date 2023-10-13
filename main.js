var somInicio;
var somPular;
var morte;
var Over;
var moeda;
var kick;
function preload(){
    somInicio = loadSound("world_start.wav");
    somPular = loadSound("jump.wav");
    morte = loadSound("mariodie.wav");
    Over = loadSound("gameover.wav");
    moeda = loadSound("coin.wav");
    kick = loadSound("kick.wav");
    setSprites();
    MarioAnimation();
}

function setup(){
    canvas = createCanvas(1240,356);
    canvas.parent("canvas");

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent("game_console");

    robo = ml5.poseNet(video,modelRealy)
    robo.on('pose',gotR)
    instializeInSetup(mario);
    
}
function modelRealy(){
console.log("Robô está pronto!")
}
var NarizX = 0;
var NarizY = 0;

function gotR(r){
    if(r.length > 0){
    NarizX = r[0].pose.nose.x
    NarizY = r[0].pose.nose.y
    }
}
function draw(){
    game();
    
}
