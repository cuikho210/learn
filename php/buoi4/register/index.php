<?php
$name = isset($_POST['name']) ? $_POST['name'] : false;
$age = isset($_POST['age']) ? $_POST['age'] : false;
$gender = isset($_POST['gender']) ? $_POST['gender'] : false;
$email = isset($_POST['email']) ? $_POST['email'] : false;
$reason = isset($_POST['reason']) ? $_POST['reason'] : false;
$password = isset($_POST['password']) ? $_POST['password'] : false;

$isSubmit = false;
$error = '';
$isError = false;

if (
    $name !== false
    && $age !== false
    && $gender !== false
    && $email !== false
    && $reason !== false
    && $password !== false
) {
    $isSubmit = true;

    require '../func.php';
    require '../db.php';

    // Validate
    if (!isPassword($password)) {
        $error .= '[Error] Mật khẩu phải từ 6 tới 30 ký tự, bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt<br>';
        $isError = true;
    }

    if (!isEmail($email)) {
        $error .= '[Error] Email không hợp lệ!<br>';
        $isError = true;
    }

    if ($age / 1 != $age) {
        $error .= '[Error] Tuổi không phải là số!<br>';
        $isError = true;
    }

    if ($age >= 150 || $age < 1) {
        $error .= '[Error] Tuổi phải nhỏ hơn 150. Lớn rồi còn chơi trò trẻ con :((<br>';
        $isError = true;
    }

    if ($gender / 1 != $gender || $gender > 1 || $gender < 0) {
        $error .= '[Error] Giới tính không hợp lệ!<br>';
        $isError = true;
    }

    $name = validate($name);
    $reason = validate($reason);

    if (!$isError) {
        // Insert to database
        $password = md5($password);
        
        $result = insert('buoi4', array(
            'name' => $name,
            'age' => $age,
            'gender' => $gender,
            'email' => $email,
            'reason' => $reason,
            'password' => $password
        ));

        if ($result) {
            $error = '[OK] Đăng ký thành công!<br>';
        }
        else {
            $error = '[Error] Có lỗi xảy ra, vui lòng thử lại sau!<br>';
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buổi 4 - PHP</title>

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="tag">
        <!-- Navbar -->
        <div class="nav">
            <a href="../"><div>Trang chủ</div></a>
            <div class="active">Đăng ký</div>
        </div>

        <!-- Head -->
        <div>
            <div class="hashtag">CANDY</div>

            <h1 class="mb-0">
                <span class="text-red-dark">THẾ GIỚI</span>
                <span class="text-red">KẸO</span>
            </h1>

            <h2 class="text-pink mt-0">
                Nơi ngọt ngào nhất thế gian ^^
            </h2>

            <p class="text-pink-dark">
                Đến với thế giới kẹo, bạn sẽ được trở về với tuổi thơ, đắm chìm trong hương vị ngọt ngào tuyệt vời của kẹo.
                <br>
                Nhắm mắt lại, từ từ cảm nhận từng chút ngọt ngào tan chảy trong miệng...
                <br>
                Đăng ký ngay một vé và dẫn gấu đi cùng ngay thôi nào!
            </p>
        </div>

        <!-- Form -->
        <div>
            <h2 class="text-red-dark">Đăng ký</h2>
            <p class="text-red"><?php echo $error; ?></p>

            <form action="" method="post" id="form">
                <label>
                    Tên bạn là gì?
                    <input type="text" name="name" required placeholder="Kẹo dẻo? Kẹo kéo? Hay kẹo mạch nha?">
                </label>

                <label>
                    Bạn mấy tuổi rồi?
                    <input type="number" name="age" required>
                </label>

                <label>
                    Email của bạn là gì?
                    <input type="email" name="email" required>
                </label>

                <div>
                    Bạn là nam hay nữ?
                    <br>
                    <label class="radio" style="margin-top: .25rem;">
                        <input type="radio" name="gender" value="0" required>
                        <span>Nam</span>
                    </label>
        
                    <label class="radio">
                        <input type="radio" name="gender" value="1" required>
                        <span>Nữ</span>
                    </label>
                    <br>
                </div>

                <label>
                    Vì sao bạn đăng ký đi tới thế giới kẹo?
                    <input type="text" name="reason" required placeholder="Vì tớ thích bạn cuikho quá nên muốn tới chơi với bạn ấy ^^">
                </label>

                <label>
                    Đặt cho chính mình một mật khẩu nào ^^
                    <input type="password" name="password" required placeholder="Mật khẩu từ 6 kí tự bao gồm chữ hoa, chữ thường, số, kí tự dặc biệt">
                </label>
                
                <div onclick="document.getElementById('form').submit()" class="btn btn1">Đăng ký</div>
            </form>
        </div>
        <br>
    </div>
</body>
</html>