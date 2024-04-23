<?php
	$dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$db = "MGR_CSE";
	
	$conn = mysqli_connect($dbhost, $dbuser, $dbpass,$db);
	$DB_info = mysqli_select_db($conn, $db);
	
	$EncodedData=file_get_contents('php://input');
	$DecodedData=json_decode($EncodedData, true);
	
	$regNo = $DecodedData['regNo'];
	$password =$DecodedData['password'];
	
	$SQL = "SELECT * FROM Parent_Registration WHERE regNo = '$regNo'";
	
	$exeSQL = mysqli_query($conn, $SQL);
	$checkRegNo =  mysqli_num_rows($exeSQL);
	
	if ($checkRegNo != 0) 
	{
		$arrayu = mysqli_fetch_array($exeSQL);
		if ($arrayu['password'] != $password) 
		{
			$Message = "WRONG Password";
		} 
		else 
		{
			$Message = "Successfull Login";
		}
	} 
	else 
	{
		$Message = "No account yet";
	}
	$response[] = array("Message" => $Message);
	echo json_encode($response);
?>