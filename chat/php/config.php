<?php 
    $conn = mysqli_connect("localhost","root","123456","chat");
    if (!$conn) {
        echo "DataBase connercted" . mysqli_connect_error();
    }
?>