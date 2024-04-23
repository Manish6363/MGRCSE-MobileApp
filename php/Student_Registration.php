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
  $regNo=$DecodedData['regNo'];
  $dob=$DecodedData['dob'];
  $phone=$DecodedData['phone'];
  $fatherName=$DecodedData['fatherName'];
  $motherName=$DecodedData['motherName'];
  $batch=$DecodedData['batch'];
  $branch=$DecodedData['branch'];
  $email=$DecodedData['email'];
  $password=$DecodedData['password'];
  $confirmPassword=$DecodedData['confirmPassword'];
  
  $query="INSERT INTO Student_Registration(name, regNo, dob, phone, fatherName, motherName, batch, branch, email, password, confirmPassword) VALUES('$name','$regNo','$dob', '$phone','$fatherName','$motherName', '$batch','$branch','$email', '$password','$confirmPassword')";
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