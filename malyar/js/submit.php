<?php
$email = 'mifa912008@gmail.com';
$name = "БЕЛЫЙ ДОМ";
$copyto = "mifa912008@gmail.com";
global yaCounter40177132;
function valid_name($username){
	if (!trim($username))
	  return false;
$allowedchars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZАаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя ";
	for ($i = 0; $i < strlen($username); ++$i)
	  if (strpos($allowedchars, $username[$i]) === false)
	    return false;
	return true;
}
function valid_tel($username){
	if (!trim($username))
	  return false;
$allowedchars = "0123456789-+() ";
	for ($i = 0; $i < strlen($username); ++$i)
	  if (strpos($allowedchars, $username[$i]) === false)
	    return false;
	return true;
}
function validemail($email) {
    return preg_match('/^[\w.-]+@([\w.-]+\.)+[a-z]{2,6}$/is', $email);
}
  if($_POST && isset($_GET['call']) || $_POST && isset($_GET['prob']) || $_POST && isset($_GET['ras4']) || $_POST && isset($_GET['for'])){
		if(isset($_GET['call']))
		$subj = 'Заказан обратный звонок';
		elseif (isset($_GET['prob']))
		$subj = 'Пробная стирка';
		elseif (isset($_GET['ras4']))
		$subj = 'Рассчитать стоимость услуг';
		elseif (isset($_GET['for']))
		$subj = strip_tags($_POST['for']);
		$subj = preg_replace('/\b/', '&nbsp;', $subj);
		$subj = str_replace(' ', '&nbsp;', $subj);
		$subj = preg_replace('/\t+/', '&nbsp;', $subj);
		$subj = preg_replace('/\s+/', '', $subj);
		$subj = str_replace('&nbsp;', ' ', $subj);
		if(empty($_POST['name'])){
			  $response['type'] = 'error';
		 $response['message'] = 'Введите ваше имя!';
	 print json_encode($response);
        exit;
		}
			if(!valid_name($_POST['name'])){
			 $response['type'] = 'error';
		 $response['message'] = 'Имя может состоять только из букв!';
	 print json_encode($response);
        exit;
		}
		if(empty($_POST['tel'])){
			 $response['type'] = 'error';
		 $response['message'] = 'Введите ваш номер телефона!';
	 print json_encode($response);
        exit;
		}
		if(!valid_tel($_POST['tel'])){
			 $response['type'] = 'error';
		 $response['message'] = 'Неверный формат номера телефона!';
	 print json_encode($response);
        exit;
		}
		 $msg = "Имя: ".$_POST['name']."\r\nНомер телефона: ".$_POST['tel']."\r\n";
		if (isset($_GET['ras4']))
		$msg .= "Тип организации: $_POST[tip]\r\n
Прямое белье: $_POST[preamoe] (кг)\r\n
Махровые изделия: $_POST[mahrovoe] (кг)\r\n
Подушки/Одеяла: $_POST[podushki] (кг)\r\n
Скатерти/Салфетки: $_POST[skaterti] (кг)\r\n
Спецодежда: $_POST[specodejda] (кг)\r\n
Другое: $_POST[drugoe] (кг)\r\n
		";
		$send = @mail($email, $subj, $msg, "From: $name\r\nCC: $copyto\r\n");
		if(!$send){
			 $response['type'] = 'error';
		 $response['message'] = 'Ошибка на сервере!';
	 print json_encode($response);
        exit;
		}else{
		 $response['type'] = 'success';
	 print json_encode($response);
        exit;
		}
    }
?>