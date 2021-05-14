Webcam.set({
    width:350,
    height:300,
    image_format: 'png' ,
    png_quality:90,
    constraints: {
        facingMode: "environment"
    }
}) ;

camera = document.getElementById("camera") ;
Webcam.attach('#camera') ;

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="resultImg" src='+data_uri+'>'
    } ) ;
}
console.log("ml5 version is:" + ml5.version) ;
classifier = ml5.imageClassifier('MobileNet' , modelLoaded) ;

function modelLoaded()
{
    console.log("Model is loaded now.") ;
}

function identify()
{
    img = document.getElementById("resultImg") ;
    classifier.classify(img, gotResult) ;
}

function gotResult(error, results)
{
    if(error) {
        console.error(error) ;
    }
    else {
        console.log(results) ;
        document.getElementById("objectName").innerHTML = results[0].label ;
    }
}