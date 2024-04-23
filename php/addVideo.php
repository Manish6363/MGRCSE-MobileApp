<?php
  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $db = "MGR_CSE";
  
  $conn = mysqli_connect($dbhost, $dbuser, $dbpass,$db);
  $DB_info = mysqli_select_db($conn, $db);
  
  $EncodedData=file_get_contents('php://input');
  $DecodedData=json_decode($EncodedData, true);
  
  $name=$DecodedData['name'];
  $linkUrl=$DecodedData['linkUrl'];
  $query="INSERT INTO link_list(name, linkUrl) VALUES('$name', '$linkUrl')";
  $R = mysqli_query($conn, $query);
  
  if($R)
  {
	$Message="Link has been Added successfully";  
  }
  else
  {
    $Message="Server Error... Please try latter";
  }
  $response[] = array("Message"=>$Message);
  echo json_encode($response);
?>