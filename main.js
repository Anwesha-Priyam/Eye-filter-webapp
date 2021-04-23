leftEyeX=0;
leftEyeY=0;
rightEyeX=0;
rightEyeY=0;
function preload()
{
    dominus=loadImage("https://i.postimg.cc/hGS8n1B1/Eye-filter2.jpg")
}
function setup()
{
    canvas=createCanvas(450,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(445,345);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video,10,10,430,330);
    fill(194, 252, 247);
    image(dominus, leftEyeX, leftEyeY, 95, 95);
}
function takeSnapshot()
{
    save("myFilters.png");
}
function modelLoaded()
{
    console.log("PoseNet model is Initialized/Loaded.");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        leftEyeX=results[0].pose.leftEye.x -75;
        leftEyeY=results[0].pose.leftEye.y -75;
        console.log("Left eye x =" + leftEyeX);
        console.log("Left eye y =" + leftEyeY);
        console.log("Right eye x =" + rightEyeX);
        console.log("Right eye x =" + rightEyeY);
        rightEyeX=results[0].pose.rightEye.x;
        rightEyeY=results[0].pose.rightEye.y;
        console.log(results);
        console.log("Left eye x =" + results[0].pose.leftEye.x);
        console.log("Left eye y =" + results[0].pose.leftEye.y);
        console.log("Right eye x =" + results[0].pose.rightEye.x);
        console.log("Right eye y =" + results[0].pose.rightEye.y);
    }
}