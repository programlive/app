      var H1 = document.querySelector('#H1');
       var H2 = document.querySelector('#H2');
       var H3 = document.querySelector('#H3');
       var L1 = document.querySelector('#L1');
       var L2 = document.querySelector('#L2');
       var L3 = document.querySelector('#L3');
       var B1 = document.querySelector('#B1');
       var B2 = document.querySelector('#B2');
       var B3 = document.querySelector('#B3'); 
       var BL = document.querySelector('#BL'); 
       var HH1 = document.querySelector('#HH1');
       var HH2 = document.querySelector('#HH2');
       var LL1 = document.querySelector('#LL1');
       var LL2 = document.querySelector('#LL2');    
       var BB1 = document.querySelector('#BB1');
       var BB2 = document.querySelector('#BB2');      
       var DD1 = document.querySelector('#DD1');
       var DD2 = document.querySelector('#DD2');    
       var HLBD = document.querySelector('#HLBD');  
      
      function count()
      {
        HH1.value = H1.value +" - "+H2.value+" - "+H3.value;
        HH2.value = H1.value - H2.value - H3.value;
        LL1.value = L1.value +" - "+L2.value+" - "+L3.value+" - "+BL.value+" * " +2;
        LL2.value = L1.value - L2.value - L3.value - BL.value*2;
        BB1.value = B1.value +" - "+B2.value+" - "+B3.value+" - "+BL.value+" * " +2;
        BB2.value = B1.value - B2.value - B3.value - BL.value*2; 
        DD1.value = "开方("+LL2.value+" * "+LL2.value+" + "+BB2.value+" * "+BB2.value+")";
        DD2.value = Math.round( Math.sqrt(LL2.value*LL2.value+BB2.value*BB2.value));       
        
        HLBD.value = HH2.value + "	" + LL2.value + "	" + BB2.value + "	" + DD2.value;
      }
            
