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
  $empId=$DecodedData['empId'];
  $dob=$DecodedData['dob'];
  $phone=$DecodedData['phone'];
  $exp=$DecodedData['exp'];
  $email=$DecodedData['email'];
  $password=$DecodedData['password'];
  $confirmPassword=$DecodedData['confirmPassword'];
  
  $query="INSERT INTO Teacher_Registration(name, empId, dob, phone, exp, email, password, confirmPassword) VALUES('$name','$empId','$dob', '$phone', '$exp','$email', '$password','$confirmPassword')";
  $R = mysqli_query($conn, $query);
  if($R)
  {
	$Message="Student has been registered successfully";  
  }
  else
  {
    $Message="Server Error... Please try latter";
  }
  $response[] = array("Message"=>$Message);
  echo json_encode($response);
?>