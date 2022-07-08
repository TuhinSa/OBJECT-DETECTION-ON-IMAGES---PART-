Status = "";
function preload() {
    img = loadImage("AC.jpg");
}
function  setup() {
    canvas = createCanvas(640,420);
    canvas.center()
        objectDetector = ml5.objectDetector('cocssd', modelLoaded);
        document.getElementById("status").innerHTML = "Status :Detecting Objects";
    
}
function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img, gotResults);
}

    function gotResults(error, results){
        if(error){
            console.error("error")
        }
        else {
            console.log(results);
        }
    }


