var myImage=document.getElementById("myCanvas");//定义画布
      var x=document.getElementById("screenX");//设置粘贴坐标
      var y=document.getElementById("screenY");//设置粘贴坐标
      var img = new Image();//定义图像1
      var img1 = new Image();//定义图像2
var imgdata;// 获取图画的内容，以便进一步处理
      
        var context = myImage.getContext('2d');//得到画布内容接口
  
          if (typeof FileReader === 'undefined') {  //如果FileReader=未定义
            alert('Your browser does not support FileReader...');  //则提示浏览器支持出错
        }  
      //若果支持，往下走
        var reader1 = new FileReader();  //获取FileReader实例
  var reader2 = new FileReader();  //获取FileReader实例
  
    function OneImg(sourceId) {  //第一个图像选择响应函数

       reader1.readAsDataURL(document.getElementById(sourceId).files[0]);  //以数据方式读文件
        reader1.onload = function(e) {  //读取成功后触发此异步函数响应
    img.src = e.target.result;//获取图像数据
          img.onload = function(){//图像数据获取完成后触发此异步函数响应
       //     context.drawImage(img, 0, 0,img.width,img.height);//在画布上绘图
            }
        }    
    }  
      
       function TowImg(sourceId) {  //第一个图像选择响应函数
       reader2.readAsDataURL(document.getElementById(sourceId).files[0]);  //以数据方式读文件
        reader2.onload = function(e) {  //读取成功后触发此异步函数响应
    img1.src = e.target.result;//获取图像数据
          img1.onload = function(){//图像数据获取完成后触发此异步函数响应
        myImage.width = img1.width;//画布宽度
        myImage.height = img1.height;
             context.drawImage(img1, 0, 0,img1.width,img1.height);//在画布上绘图
            context.drawImage(img, x.value, y.value,img.width,img.height);//在画布上绘图
            // imgdata = context.getImageData(0, 0, img1.width, img1.height);
        // 获取图画的内容，以便进一步处理
            }
        }    
    }    
      myImage.onmouseup=mouseUp;           //绑定鼠标弹起事件
myImage.onmousedown=mouseDown;//绑定鼠标按下事件
 
function mouseDown(evt) { //鼠标按下处理函数
 if(evt.button == 0)myImage.onmousemove = Flying;//绑定鼠标移动事件
 }
//Get Mouse Position
   function mouseUp(evt) {  //鼠标弹起处理函数
     myImage.onmousemove=null;//撤销鼠标移动事件
 }
      function Flying(evt)//鼠标移动处理函数
      {
  var mousePos = getMousePos(myImage,evt);//鼠标转换后赋值
  x.value=mousePos.x;
  y.value=mousePos.y; 
        checkField();//更新函数
      }
  
      
 function getMousePos(canvas, evt) {//在canvas上的鼠标坐标转换函数
   var rect = canvas.getBoundingClientRect();
   return {
     x: evt.clientX - rect.left * (canvas.width / rect.width),
     y: evt.clientY - rect.top * (canvas.height / rect.height)
   }
 }
 document.addEventListener('keydown', keyDown, false);//添加键盘事件
 function keyDown(e) {//处理键盘事件
   if (e.keyCode === 87) {y.value --;}//UP
    if (e.keyCode === 83) {y.value ++;}//DOWN
    if (e.keyCode === 65) {x.value --;}//LEFT
    if (e.keyCode === 68) {x.value ++;}//RIGHT
   //alert(e.keyCode);
    checkField();
  }
      
      function checkField(v)//更新函数
      {
            context.drawImage(img1, 0, 0,img1.width,img1.height);//在画布上绘图
            context.drawImage(img, x.value, y.value,img.width,img.height);//在画布上绘图
      }
        
function saveImageInfo (b)   //生成图片，只针对火狐以外的浏览器（火狐可直接右键保存成图片)
            {  
                var image = myImage.toDataURL("image/png");  
                var w=window.open('about:blank','image from canvas');  
                w.document.write("<img src='"+image+"' alt='from canvas'/>");  
            }  
  