<?php  session_start();  include_once "header.php"; ?>
<?php 
    include_once "php/config.php";            
    $w = "SELECT * FROM users WHERE unique_id = '{$_GET['user_id']}'";
    $id = $_GET['user_id'];
    $sql = mysqli_query($conn,$w);
    if(mysqli_num_rows($sql) > 0){
        $row = mysqli_fetch_assoc($sql);    
    }
?>
<body data-type="friends">
    <link rel="stylesheet" href="css/style.css">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-lg-0 p-md-3">
    <div class="container-fluid p-0">
        <a class="navbar-brand ms-2" href="#">Together</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Persons who accepted the friend request
                </a>
                <ul class="dropdown-menu friend_request" data-bs-popper="none">
            
                </ul>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Persons You May Know
            </a>
            <ul class="all_users dropdown-menu" data-bs-popper="none">
        
            </ul>
            </li>
        </ul>
        <div class="You">
            <img src="images/<?php echo $row['img'] ?>" alt="">
            <div>
                <h5 data-id="<?php echo $row["unique_id"] ?>" data-name="<?php echo $row["fname"] ?>"><?php echo $row["fname"]. " " . $row["lname"]; ?></h5>
            </div>
        </div>
        </div>
    </div>
    </nav>

    <section class="body">    
        <section class="users">
            <div class="head">
                <div>
                    <img src="images/<?php echo $row['img'] ?>" alt="">
                    <div>
                        <h5 data-id="<?php echo $row["unique_id"] ?>" data-name="<?php echo $row["fname"] ?>"><?php echo $row["fname"]. " " . $row["lname"]; ?></h5>
                        <span><?php echo $row["status"]; ?></span>
                    </div>
                </div>
                <button id="LogOut">logout</button>
            </div>
            <hr>
            <div class="friends">
                <div class="search d-none">
                    <input type="text" placeholder="The This is Input Not Play" disabled>
                    <button type="button"><i class="fa fa-search"></i></button>
                </div>
                <div class="searchOutput">
                    
                </div>
                <ul class="AllDriends">  
                
            
                </ul>
            </div>
        </section>
    </section>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/index.js"></script>
    <script src="js/jquery.js"></script>
</body>
</html>
