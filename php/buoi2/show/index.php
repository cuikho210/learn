<?php
$name = empty($_POST['name']) ? 'Em không có tên' : $_POST['name'];
$email = empty($_POST['email']) ? 'Em không có email' : $_POST['email'];
$address = empty($_POST['address']) ? 'Em không có nhà' : $_POST['address'];
$interest = empty($_POST['interest']) ? 'Em không thích gì cả' : $_POST['interest'];
$gender = empty($_POST['gender']) ? 'Em là gay' : $_POST['gender'];
$date = empty($_POST['date']) ? 'Em chưa được sinh ra' : $_POST['date'];
$pwd = empty($_POST['pwd']) ? 'Em không nhớ mật khẩu của em' : $_POST['pwd'];
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[HOT] Đăng ký nhận người yêu free!</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <form action="show/index.php" method="post" class="tag">
        <h2>Đăng ký thành công!</h2>
        <p>Chúng tôi sẽ sớm gửi người yêu đến cho bạn, vui lòng check email thường xuyên để không bỏ lỡ!</p>

        <label>
            Tên
            <input type="text" name="name" value='<?php echo $name; ?>' readonly>
        </label>

        <label>
            Email
            <input type="email" name="email" value='<?php echo $email; ?>' readonly>
        </label>

        <label>
            Địa chỉ
            <input type="text" name="address" value='<?php echo $address; ?>' readonly>
        </label>

        <label>
            Sở thích
            <input type="text" name="interest" value='<?php echo $interest; ?>' readonly>
        </label>

        <label>
            Giới tính
            <input type="text" name="gender" value='<?php echo $gender; ?>' readonly>
        </label>

        <label>
            Ngày sinh
            <input type="text" name="date" value='<?php echo $date; ?>' readonly>
        </label>

        <label>
            Mật khẩu
            <input type="text" name="pwd" value='<?php echo $pwd; ?>' readonly>
        </label>
    </form>
</body>
</html>