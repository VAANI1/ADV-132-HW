img = "";
status_model = "";

function preload() {
  img = loadImage('');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw() {
 
}

function modelLoaded(){
  console.log("cocossd model has loaded");
  status_model = true;
  objectDetector.detect(img , gotResult);
}

function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
  }
}
