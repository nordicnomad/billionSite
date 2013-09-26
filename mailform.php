 <?php
 

 if ($_POST[contactHuman] != "") {
    echo "fail";
} 
else {
   
  


$to = "tam@galleonlabs.com";
$subject = "1BillionBits Idea Form: " . $_POST[contactName];
$message = "Name:" .$_POST[contactName]. "\r\n" . 
			 	"Email:".$_POST[contactEmail] . "\r\n" . 
				"Idea:".$_POST[contactIdea] . "\r\n".  "\r\n". 
				
				
$from = "info@1billionbits.com";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
} 

?>

