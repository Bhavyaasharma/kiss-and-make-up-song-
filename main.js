song = "";
song2 = "";

function preload(){
song = loadSound (" music.mp3")
song2 = loadSound ("Dua Lipa - Kiss and Make Up (feat. BLACKPINK) [129 kbps].mp3")

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image (video,0,0,600,500);
}

function songName(){
    song.play();
    song2.play();
}
