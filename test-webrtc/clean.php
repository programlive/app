<?php

if(file_put_contents('datatest.txt', "") !== FALSE)
{
    echo "清空文件成功!\n";
}
else
{
    echo "清空文件失败!\n";
}
?>