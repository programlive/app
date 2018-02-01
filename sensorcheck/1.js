var  OrientationDATA= document.getElementById("OrientationDATA");
var  devicemotionDATA= document.getElementById("devicemotionDATA");    
var  DeviceLightDATA= document.getElementById("DeviceLightDATA");       
var  DeviceGPSDATA= document.getElementById("DeviceGPSDATA");
function deviceOrientationListener(evt) {
OrientationDATA.innerHTML="陀螺仪(Orientation)<br/>";
OrientationDATA1.innerHTML="alpha:"+evt.alpha + "<br/>";
OrientationDATA1.innerHTML+="beta:"+evt.beta + "<br/>";
OrientationDATA1.innerHTML+="gamma:"+evt.gamma + "<br/>";
}

function deviceMotionHandler(evt) {
var accl = evt.acceleration;
devicemotionDATA.innerHTML="运动计(Motion)<br/>";
devicemotionDATA1.innerHTML="X:"+accl.x + "<br/>";
devicemotionDATA1.innerHTML+="Y:"+accl.y + "<br/>";
devicemotionDATA1.innerHTML+="Z:"+accl.z + "<br/>";

}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', deviceOrientationListener, false);
  window.addEventListener('MozOrientation', deviceOrientationListener, false);
      } else {
OrientationDATA1.innerHTML="doesn't support Device Orientation";
      }

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
  devicemotionDATA1.innerHTML = "doesn't support Device Motion";
}
      
  window.addEventListener('deviceproximity', function(event) {
     proximity.innerHTML= "距离计(proximity)<br/>"
   proximity1.innerHTML= "value: " + event.value +"max: " + event.max +"min: " + event.min;
});    

window.addEventListener('devicelight', function(event) {
    // Get the ambient light level in lux.
  DeviceLightDATA.innerHTML= "感光计(light)<br/>"
  DeviceLightDATA1.innerHTML= "value: " + event.value;
});
window.addEventListener('devicepressure',function(event) {
    // Get the ambient light level in lux.
  devicepressureDATA.innerHTML= "气压计(epressure)<br/>"
  devicepressureDATA1.innerHTML= "value: " + event.value;
});
      
      
	// 获取位置坐标
        	if (navigator.geolocation) {
		 navigator.geolocation.getCurrentPosition(showPosition,showError);
	}
	else{
		DeviceGPSDATA.innerHTML="抱歉，你的浏览器不支持地理定位！";
	}

  function showPosition(position)
  {	DeviceGPSDATA.innerHTML= "GPS定位(GPS)<br/>"
   DeviceGPSDATA1.innerHTML= "您所在的位置:<br/>纬度[" + position.coords.latitude + "]<br/>经度[" +position.coords.longitude +"]<br/>"; 
  
  }
    
      function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
		DeviceGPSDATA1.innerHTML+="您拒绝了我们访问您的位置"
		break;
		case error.POSITION_UNAVAILABLE:
		DeviceGPSDATA1.innerHTML+="位置信息不可用"
		break;
		case error.TIMEOUT:
		DeviceGPSDATA1.innerHTML+="定位超时"
		break;
		case error.UNKNOWN_ERROR:
		DeviceGPSDATA1.innerHTML+="发生未知错误"
		break;
	}
  }
    // 获取网络连接类型
      var net = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                  var type = net.type;
   connection.innerHTML= "网络连接类型(connection)<br/>"
   connection1.innerHTML= type;
            function updateConnectionStatus() {
   connection1.innerHTML="Connection type is change from " + type + " to " + connection.type;
            }
connection.addEventListener('typechange', updateConnectionStatus);

window.screen.lockOrientation = screen.lockOrientation ||screen.mozLockOrientation || screen.msLockOrientation;
window.screen.lockOrientation(["portrait-primary","portrait-secondary"]);