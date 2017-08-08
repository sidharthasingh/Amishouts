<?php
	function connection()
	{
		$hostname = "localhost";
		$username = "root";
		$password = "";
		$database = "AmiShouts";
		$port = "3306";
		$conn = new mysqli($hostname, $username, $password, $database, $port);
		return $conn;	
	}
?>