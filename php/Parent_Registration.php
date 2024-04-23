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
  $childName=$DecodedData['childName'];
  $regNo=$DecodedData['regNo'];
  $phone=$DecodedData['phone'];
  $email=$DecodedData['email'];
  $address=$DecodedData['address'];
  $password=$DecodedData['password'];
  $confirmPassword=$DecodedData['confirmPassword'];
  
  $query="INSERT INTO Parent_Registration(name, childName, regNo, phone, email, address, password, confirmPassword) VALUES('$name', '$childName', '$regNo', '$phone', '$email', '$address', '$password','$confirmPassword')";
  $R = mysqli_query($conn, $query);
  
  if($R)
  {
	$Message="Dear Parent, You have been registered successfully";  
  }
  else
  {
    $Message="WRONG REGISTER Number or Your Candidate is not Studying in MGR or Candidate is not registered.";
  }
  $response[] = array("Message"=>$Message);
  echo json_encode($response);
?>