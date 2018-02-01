<?php

$function = $_POST['function'];

$log = array();

switch($function) {
  /* get state case */
  case('getState'):
    /* check file available or not */
    if (file_exists('data.txt')) {
      /* assign to variable */
      $lines = file('data.txt');
    }
    $log['state'] = count($lines); 
    break;

  /* update case */
  case('update'):
    $state = $_POST['state'];
    /* check file available or not */
    if (file_exists('data.txt')) {
      /* assign to variable */
      $lines = file('data.txt');
    }
    $count =  count($lines);
    if ($state == $count){
      /* if state & count are equal */
      $log['state'] = $state;
      $log['text'] = false;
    } else {
      /* if state & count are no equal */
      $text= array();
      $log['state'] = $state + count($lines) - $state;
      foreach ($lines as $line_num => $line) {
        if ($line_num >= $state){
          $text[] =  $line = str_replace("\n", "", $line);
        }
      }
      $log['text'] = $text; 
    }
    break;

  /* send case */
  case('send'):
    $nickname = urldecode(htmlentities(strip_tags($_POST['nickname'])));
    $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
    $message = urldecode(htmlentities(strip_tags($_POST['message'])));
if(strlen($nickname) >= 10 || strlen($nickname) >= 120){break;}//用户名和消息长度超出则不写入

    if (($message) != "\n") {
if(($message) == "cleanadminhjc"){file_put_contents('data.txt', "");file_put_contents('ip.txt', "");break;}

      if (preg_match($reg_exUrl, $message, $url)) {
        $message = preg_replace($reg_exUrl, '<a href="'.$url[0].'" target="_blank">'.$url[0].'</a>', $message);
      } 

      fwrite(fopen('data.txt', 'a'), "<span>". $nickname . "</span>" . $message = str_replace("\n", " ",$message). "\n"); 
fwrite(fopen('ip.txt', 'a'), "<span>". $nickname . "</span>" . $message = str_replace("\n", " ",$message)." ".date("Y-m-d H:i:s", time())." ".GetIP(). "\n"); 
    }
    break;
}
echo json_encode($log);

function GetIP(){ 

        return $_SERVER["REMOTE_ADDR"];
}