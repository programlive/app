 var startButton = document.getElementById('start');
  var stopButton = document.getElementById('stop');
  startButton.onclick = funstart;
  stopButton.onclick = funstop;
     var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");

    // capture incoming socket data in an array
    var data=[75];
    var data1=[75];
    var data2=[75];

    // x is your most recent data-point in data[]
    var x=0;
var mx=0,my=0,mz=0;
    // panAtX is how far the plot will go rightward on the canvas
    // until the canvas is panned
 
    var panAtX=299;
    var continueAnimation=false;

 var x1=0,y1=75,x2=0,y2=75,x3=0,y3=75;
  ctx.fillText("7-------------------------------------------------------------------------", 0, 8);
ctx.fillText("3-------------------------------------------------------------------------", 0, 49);
ctx.fillText("0-------------------------------------------------------------------------", 0, 78);
ctx.fillText("-3-------------------------------------------------------------------------", 0, 109);
ctx.fillText("-7------------------------------------------------------------------------", 0, 148); 
    function animate(){
data.push(mx * 10+75);
data1.push(my * 10+75);
data2.push(mz * 10+75);
ctx.fillText("7-------------------------------------------------------------------------", 0, 8);
ctx.fillText("3-------------------------------------------------------------------------", 0, 49);
ctx.fillText("0-------------------------------------------------------------------------", 0, 78);
ctx.fillText("-3-------------------------------------------------------------------------", 0, 109);
ctx.fillText("-7------------------------------------------------------------------------", 0, 148); 
      if(x>data.length-1){return;}
        if(continueAnimation){ 
          requestAnimationFrame(animate);
          //setTimeout(animate,1000/30); 
        }
        if(x++<panAtX){
           ctx.beginPath(); 
            ctx.strokeStyle="red";
          ctx.lineWidth="1";
          ctx.moveTo(x,y1);
ctx.lineTo(x,data[x]);
    y1=data[x];
 ctx.stroke();
  
               ctx.beginPath(); 
            ctx.strokeStyle="blue";
          ctx.lineWidth="1";
          ctx.moveTo(x,y2);
ctx.lineTo(x,data1[x]);
    y2=data1[x];
 ctx.stroke();      
          
                         ctx.beginPath(); 
            ctx.strokeStyle="green";
          ctx.lineWidth="1";
          ctx.moveTo(x,y3);
ctx.lineTo(x,data2[x]);
    y3=data2[x];
 ctx.stroke();     
          
        }else{

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.beginPath();//Must use this
               ctx.beginPath(); 
            ctx.strokeStyle="red";
          ctx.lineWidth="1";
            for(var xx=0;xx<panAtX;xx++){
                var y=data[x-panAtX+xx];
                ctx.lineTo(xx,y)
            }
          ctx.stroke();
          
          
                         ctx.beginPath(); 
            ctx.strokeStyle="blue";
          ctx.lineWidth="1";
            for(var xx=0;xx<panAtX;xx++){
                var y=data1[x-panAtX+xx];
                ctx.lineTo(xx,y)
            }
          ctx.stroke();
          
                                   ctx.beginPath(); 
            ctx.strokeStyle="green";
          ctx.lineWidth="1";
            for(var xx=0;xx<panAtX;xx++){
                var y=data2[x-panAtX+xx];
                ctx.lineTo(xx,y)
            }
          ctx.stroke();
          
ctx.fillText("7-------------------------------------------------------------------------", 0, 8);
ctx.fillText("3-------------------------------------------------------------------------", 0, 49);
ctx.fillText("0-------------------------------------------------------------------------", 0, 78);
ctx.fillText("-3-------------------------------------------------------------------------", 0, 109);
ctx.fillText("-7------------------------------------------------------------------------", 0, 148);
        }
    }

   function devicemotionListener(evt) {
var  DDATA= document.getElementById("devicemotionDATA");
var accl = evt.acceleration;
if (accl.x > 0.1 || accl.y > 0.1 || accl.z > 0.1) {
    mx=accl.x;
    my=accl.y;
    mz=accl.z;
DDATA.innerHTML="acceleration<br/>";
DDATA.innerHTML+="(red)X:"+accl.x + "<br/>";
DDATA.innerHTML+="(blue)Y:"+accl.y + "<br/>";
DDATA.innerHTML+="(green)Z:"+accl.z + "<br/>";
DDATA.innerHTML+="buffer:"+x + "<br/>";
}
      }
     window.addEventListener("devicemotion", devicemotionListener, false);
  window.screen.lockOrientation = screen.lockOrientation ||screen.mozLockOrientation || screen.msLockOrientation;
window.screen.lockOrientation(["portrait-primary","portrait-secondary"]);
    function funstart(){continueAnimation=true;animate();startButton.disabled = true;}
  function funstop(){continueAnimation=false;startButton.disabled = false;}
  //animate();
