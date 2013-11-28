<?php
//抓取文件
function get_contents($url){
    $ch =curl_init($url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $str =curl_exec($ch);
    curl_close($ch);
    if ($str !==false) {
        return $str;
    }else {
        return '';
    } 
}

//得到扩展名
function get_extend($file_name) {
     $extend =explode("." , $file_name);
     $va=count($extend)-1;
     return $extend[$va];
}

/**
* begin
*/

//cdn上存在的各种可能的文件类型
$header = array(
    'js' => 'Content-Type: application/x-javascript',
    'css' => 'Content-Type: text/css',
    'jpg' => 'Content-Type: image/jpg',
    'gif' => 'Content-Type: image/gif',
    'png' => 'Content-Type: image/png',
    'jpeg' => 'Content-Type: image/jpeg',
    'swf' => 'Content-Type: application/x-shockwave-flash'
);
//文件类型
$type = '';

//文件完整路径数组
$files = array();

//前缀
$prefix = $_SERVER['SCRIPT_NAME'];
$split_a= explode("??",$_SERVER['REQUEST_URI']);

//echo join("\n",$split_a);
//echo "\n****************\n";

$split_a[1] = preg_replace("/\\?.*$/",
"",
$split_a[1]);

//echo $prefix;
//echo "\n****************\n";

//echo join("\n",$split_a);
//echo "\n****************\n";

if(preg_match('/,/',$split_a[1])){//多文件
     $_tmp = explode(',',$split_a[1]);
     foreach($_tmp as $v){
          $files[] = $prefix.$v;
     }
}else{//单文件
     $files[] = $prefix.$split_a[1];
}

$R_files = array();

foreach ($files as $k) {
     $k = preg_replace(
          array('/^\//'),
          array(''),
          $k);
    
     if(!preg_match('/(\.js|\.css)$/',$k)){
          continue;
     }
    if(empty($type)) {
          $type = get_extend($k);
    }
   
    //echo $k."\n";
   
     //文件存在
    if(file_exists($k)) {
          $R_files[] = file_get_contents($k);
    }
}

//添加过期头
//header("Expires: " . date("D, j M Y H:i:s", strtotime("now + 10 years")) ." GMT");
//文件类型
header($header[$type]);
//拼装文件
$result = join("\n",$R_files);
//输出文件
echo $result;
?>