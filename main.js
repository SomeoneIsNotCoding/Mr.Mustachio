//https://i.postimg.cc/B6sHJp0D/moustache.png



noseX=0;
noseY=0;







function preload()
{
    clown=loadImage("https://i.postimg.cc/B6sHJp0D/moustache.png");
}


function setup()
{
    canvas=createCanvas(720,600)
    canvas.center();


    video = createCapture(VIDEO);
    video.size(720,600);
    video.hide()




    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("model is ready");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX is",noseX);
        console.log("noseY is",noseY);
    }
}


function draw()
{
    image(video,0,0,720,600);
    fill(255,5,7)
    stroke(255,5,7)
   // circle(noseX,noseY,100)
   push()
   imageMode(CENTER)
   image(clown,noseX,noseY +40,200,200)
   pop()
}



function take_snapshot()
{
    save('Filter.png');
}