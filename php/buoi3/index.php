<?php
// Connect Database
$conn = mysqli_connect('localhost', 'u863046739_learn', 'Learn@123', 'u863046739_learn');
mysqli_set_charset($conn, 'utf8');

// Query
$query = "select * from buoi3";
$result = mysqli_query($conn, $query);

// Disconnect
mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách thành viên</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="tag">
        <a href="insert">[Thêm thành viên]</a>
        <br><br>

        <?php foreach ($result as $user) { ?>
        
            <div class="user">
                <h3><?php echo $user['name']; ?></h3>
                <p>Tuổi: <?php echo $user['age']; ?></p>

                <p>Giới tính:
                    <?php
                        if ($user['gender'] == 0) echo 'Nam';
                        else echo 'Nữ';
                    ?>
                </p>

                <p>Email: <?php echo $user['email']; ?></p>
            </div>

        <?php } ?>
    </div>
</body>
</html>