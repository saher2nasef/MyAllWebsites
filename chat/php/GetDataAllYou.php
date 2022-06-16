<?php 

session_start();
include_once "config.php";

    $sql = mysqli_query($conn, "SELECT * FROM `accept friends`");
    while($row = mysqli_fetch_assoc($sql)){
        $koopId =  $_POST['koopId'];
        if($koopId == $row['user_one_id']){
            $sql2 = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$row['user_two_id']}");
            while($row2 = mysqli_fetch_assoc($sql2)){
                echo '  
               
                       
                <li>        
                    <a href="" data-go="'.$row2["unique_id"].'" data-name="'.$row2["fname"].'">
                        <div class="friend">
                            <img src="images/'.$row2['img'].'" alt="">
                            <div>
                                <h5>'.$row2["fname"]. " " . $row2["lname"].'</h5>
                                <span>'.$row2["status"].'</span>
                            </div>
                        </div>  
                    </a>            
                </li>
            ';
            }
        }elseif($koopId == $row['user_two_id']){
            $sql2 = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$row['user_one_id']}");
            while($row2 = mysqli_fetch_assoc($sql2)){
                echo '            
                <li>       
                    <a href="" data-go="'.$row2["unique_id"].'" data-name="'.$row2["fname"].'">
                        <div class="friend">
                            <img src="images/'.$row2['img'].'" alt="">
                            <div>
                                <h5>'.$row2["fname"]. " " . $row2["lname"].'</h5>
                                <span>'.$row2["status"].'</span>
                            </div>
                        </div>  
                    </a>            
                </li>
            ';
            }
        }
    }





?>

