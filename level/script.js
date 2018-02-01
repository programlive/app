var tar=document.getElementById("target");
        var b=document.getElementById("beta");
        var g=document.getElementById("gamma");
      //anim();
      function anim(){
var bet=275+(Math.random()*10);
var gam=275+(Math.random()*10);
bet=bet.toFixed();
gam=gam.toFixed();
        tar.style.top=bet;
        b.style.top=bet;
        tar.style.left=gam;
        g.style.left=gam;
        b.innerHTML="<p></p>beta<p>"+bet+"</p>";
        g.innerHTML="<p></p>gamma<p>"+gam+"</p>";
        setTimeout('anim()',1000/30);
         
      }
         function deviceOrientationListener(evt) {
 	              if (evt.gamma || evt.beta || evt.gamma) {
                    
                    var bv=evt.beta;
                    var gv=evt.gamma;      
var bet=bv*5*-1+275;
var gam=gv*5*-1+275;
        tar.style.top=bet;
        b.style.top=bet;
        tar.style.left=gam;
        g.style.left=gam;
        b.innerHTML="<p></p>beta<p>"+bv.toFixed(2)+"</p>";
        g.innerHTML="<p></p>gamma<p>"+gv.toFixed(2)+"</p>";
                    
                    
	              }

 }
  window.addEventListener("deviceorientation", deviceOrientationListener, false);
  window.addEventListener("MozOrientation", deviceOrientationListener, false); 
      
      window.screen.lockOrientation = screen.lockOrientation ||screen.mozLockOrientation || screen.msLockOrientation;
window.screen.lockOrientation(["portrait-primary","portrait-secondary"]);


