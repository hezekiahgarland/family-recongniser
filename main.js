Webcam.set({
    width: 350,
    height: 350,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera");
image_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RR0kwv00X/model.json", modelloaded);

function modelloaded() {
    console.log("model sucsefuly loaded");
}

function takepic() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="cam_pic" src="' + pic + '">';
    });
}

function identifypic() {
    pic = document.getElementById("cam_pic");
    image_model.classify(pic, getresult)
}
function getresult(e,r){
    if(e){
        console.error(e);
    }
    else{
        console.log(r);
        document.getElementById("object_name").innerHTML=r[0].label;
        document.getElementById("object_acuracy").innerHTML=r[0].confidence.toFixed(2)
    }
}