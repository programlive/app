<?php

$function = $_POST['function'];

$log = array();

switch($function) {


  /* update case */
  case('update'):
    $state = $_POST['state'];
    /* check file available or not */
    if (file_exists('datatest.txt')) {
      /* assign to variable */

$log = fread(fopen('datatest.txt','r'),filesize('datatest.txt'));


    }
    break;

  /* send case */
  case('send'):
$name = $_POST['name'];
$message = stripslashes($_POST['message']);
//$message = urldecode(htmlentities(strip_tags($_POST['message'])));
//if(($message) == "clean"){file_put_contents('datatest.txt', "");break;}
    file_put_contents('datatest.txt', "");
    /*fwrite(fopen('datatest.txt', 'a'),"<span id=\"". $name ."\">" .$message. "</span>\n"); */
    fwrite(fopen('datatest.txt', 'a'),$message);
    break;
}
echo $log;