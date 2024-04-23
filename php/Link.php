<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mgr_cse";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, linkUrl FROM link_list order by name";
$result = $conn->query($sql);

$links = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $links[] = [
				'name' => $row["name"],
				'linkUrl'=>$row["linkUrl"]
				];
    }
} else {
    echo "0 results";
}
$conn->close();

echo json_encode($links);
?>