var myImage=document.getElementById("myCanvas");//���廭��
      var x=document.getElementById("screenX");//����ճ������
      var y=document.getElementById("screenY");//����ճ������
      var img = new Image();//����ͼ��1
      var img1 = new Image();//����ͼ��2
var imgdata;// ��ȡͼ�������ݣ��Ա��һ������
      
        var context = myImage.getContext('2d');//�õ��������ݽӿ�
  
          if (typeof FileReader === 'undefined') {  //���FileReader=δ����
            alert('Your browser does not support FileReader...');  //����ʾ�����֧�ֳ���
        }  
      //����֧�֣�������
        var reader1 = new FileReader();  //��ȡFileReaderʵ��
  var reader2 = new FileReader();  //��ȡFileReaderʵ��
  
    function OneImg(sourceId) {  //��һ��ͼ��ѡ����Ӧ����

       reader1.readAsDataURL(document.getElementById(sourceId).files[0]);  //�����ݷ�ʽ���ļ�
        reader1.onload = function(e) {  //��ȡ�ɹ��󴥷����첽������Ӧ
    img.src = e.target.result;//��ȡͼ������
          img.onload = function(){//ͼ�����ݻ�ȡ��ɺ󴥷����첽������Ӧ
       //     context.drawImage(img, 0, 0,img.width,img.height);//�ڻ����ϻ�ͼ
            }
        }    
    }  
      
       function TowImg(sourceId) {  //��һ��ͼ��ѡ����Ӧ����
       reader2.readAsDataURL(document.getElementById(sourceId).files[0]);  //�����ݷ�ʽ���ļ�
        reader2.onload = function(e) {  //��ȡ�ɹ��󴥷����첽������Ӧ
    img1.src = e.target.result;//��ȡͼ������
          img1.onload = function(){//ͼ�����ݻ�ȡ��ɺ󴥷����첽������Ӧ
        myImage.width = img1.width;//�������
        myImage.height = img1.height;
             context.drawImage(img1, 0, 0,img1.width,img1.height);//�ڻ����ϻ�ͼ
            context.drawImage(img, x.value, y.value,img.width,img.height);//�ڻ����ϻ�ͼ
            // imgdata = context.getImageData(0, 0, img1.width, img1.height);
        // ��ȡͼ�������ݣ��Ա��һ������
            }
        }    
    }    
      myImage.onmouseup=mouseUp;           //����굯���¼�
myImage.onmousedown=mouseDown;//����갴���¼�
 
function mouseDown(evt) { //��갴�´�����
 if(evt.button == 0)myImage.onmousemove = Flying;//������ƶ��¼�
 }
//Get Mouse Position
   function mouseUp(evt) {  //��굯������
     myImage.onmousemove=null;//��������ƶ��¼�
 }
      function Flying(evt)//����ƶ�������
      {
  var mousePos = getMousePos(myImage,evt);//���ת����ֵ
  x.value=mousePos.x;
  y.value=mousePos.y; 
        checkField();//���º���
      }
  
      
 function getMousePos(canvas, evt) {//��canvas�ϵ��������ת������
   var rect = canvas.getBoundingClientRect();
   return {
     x: evt.clientX - rect.left * (canvas.width / rect.width),
     y: evt.clientY - rect.top * (canvas.height / rect.height)
   }
 }
 document.addEventListener('keydown', keyDown, false);//��Ӽ����¼�
 function keyDown(e) {//��������¼�
   if (e.keyCode === 87) {y.value --;}//UP
    if (e.keyCode === 83) {y.value ++;}//DOWN
    if (e.keyCode === 65) {x.value --;}//LEFT
    if (e.keyCode === 68) {x.value ++;}//RIGHT
   //alert(e.keyCode);
    checkField();
  }
      
      function checkField(v)//���º���
      {
            context.drawImage(img1, 0, 0,img1.width,img1.height);//�ڻ����ϻ�ͼ
            context.drawImage(img, x.value, y.value,img.width,img.height);//�ڻ����ϻ�ͼ
      }
        
function saveImageInfo (b)   //����ͼƬ��ֻ��Ի�������������������ֱ���Ҽ������ͼƬ)
            {  
                var image = myImage.toDataURL("image/png");  
                var w=window.open('about:blank','image from canvas');  
                w.document.write("<img src='"+image+"' alt='from canvas'/>");  
            }  
  