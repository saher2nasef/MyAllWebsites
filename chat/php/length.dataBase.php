<?php 

    session_start();
    include_once "config.php";
    $sql1 = mysqli_query($conn,"SELECT COUNT(*) As count FROM `users`");
    $sql2 = mysqli_query($conn,"SELECT COUNT(*) As count FROM `friendship requests`");
    $sql3 = mysqli_query($conn,"SELECT COUNT(*) As count FROM `accept friends`");
    if ($sql1) {
        while($row1 = mysqli_fetch_assoc($sql1)){
            $all = (int)$row1["count"];
        }
    }

    if ($sql2) {
        while($row2 = mysqli_fetch_assoc($sql2)){
            $all += (int)$row2["count"];
        }
    }

    if ($sql3) {
        while($row3 = mysqli_fetch_assoc($sql3)){
            $all += (int)$row3["count"];
        }
    }
    echo $all;
?>