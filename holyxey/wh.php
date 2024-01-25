<?php

header('Access-Control-Allow-Origin: *');

$headers = "From: text.holyxey@gmail.com";
/* замените электронную почту на действующую почту,  с которой вам будет приходить письмо  */

 $message = print_r($_POST,true);
 @mail('text.holyxey@gmail.com', 'Tilda TEST', $message, $headers);
/* замените электронную почту на вашу действующую почту,  на которую вам будет приходить письмо  */

echo"ok";

?>