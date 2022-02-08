status="";

function setup(){
    canvas = createCanvas(300, 301);
    canvas.center();
}

function start(){
    object.detector = ml5.object.detector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}

function draw(){
    image(video, 0, 0, 300, 301);
    document.getElementById("Id_Of_The_Input_Box").value
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}    