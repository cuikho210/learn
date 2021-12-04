<?php
require '../func.php';
require '../db.php';

$id = empty($_GET['id']) ? false : $_GET['id'];
if (!$id) die();

$id = validate($id);
$decoded_id = decodeID($id);

$error = '';

// Get user info
$user = get_row("select * from buoi4 where id='$decoded_id'");
if (!$user) die();

$action = empty($_GET['action']) ? false : $_GET['action'];

if ($action == 'update') {
    $name = isset($_POST['name']) ? $_POST['name'] : false;
    $age = isset($_POST['age']) ? $_POST['age'] : false;
    $gender = isset($_POST['gender']) ? $_POST['gender'] : false;
    $email = isset($_POST['email']) ? $_POST['email'] : false;
    $reason = isset($_POST['reason']) ? $_POST['reason'] : false;
    $password = isset($_POST['password']) ? $_POST['password'] : false;

    $isError = false;

    if (
        $name !== false
        && $age !== false
        && $gender !== false
        && $email !== false
        && $reason !== false
        && $password !== false
    ) {
        if (md5($password) != $user['password']) {
            $error = '[Error] Mật khẩu không đúng!<br>';
            $isError = true;
        }

        // Validate
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
            $result = update('buoi4', array(
                'name' => $name,
                'age' => $age,
                'gender' => $gender,
                'email' => $email,
                'reason' => $reason
            ), "id=$decoded_id");
    
            if ($result) {
                $error = '[OK] Cập nhật thành công!<br>';
            }
            else {
                $error = '[Error] Có lỗi xảy ra, vui lòng thử lại sau!<br>';
            }
        }
    }
}
else if ($action == 'remove') {
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    if (md5($password) != $user['password']) {
        $error = '[Error] Mật khẩu không đúng!<br>';
    }
    else {
        $result = remove('buoi4', "id=$decoded_id");

        if ($result) die('Xoá thành công! <a href="../">[Trang Chủ]</a>');
        else $error = '[Error] Có lỗi xảy ra, vui lòng thử lại sau!<br>';
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
            <a href="../register"><div>Đăng ký</div></a>
            <div class="active">Thành viên</div>
        </div>

        <!-- Body -->
        <div>
            <p class="text-red"><?php echo $error; ?></p>

            <h1 class="text-red-dark">
                <?php echo $user['name']; ?>
            </h1>

            <div class="hashtag"><?php
                    if ($user['gender'] == 0) echo 'Nam';
                    else echo 'Nữ';
            ?></div>

            <div class="hashtag"><?php echo $user['age']; ?> tuổi</div>
            <p class="text-pink"><?php echo $user['email']; ?></p>

            <h2 class="text-pink mt-0">
                Bạn ngọt ngào nhất thế gian ^^
            </h2>

            <p class="text-pink-dark"><?php echo $user['reason']; ?></p>

            <p>
                <span style="cursor: pointer" class="text-red mr-1" onclick="document.getElementById('form_update').hidden=false">[Sửa]</span>
                <span style="cursor: pointer" class="text-red" onclick="document.getElementById('form_remove').hidden=false">[Xoá]</span>
            </p>
        </div>

        <!-- Update -->
        <form action="./?action=update&id=<?php echo $id; ?>" method="post" id="form_update" hidden>
            <h2 class="text-red-dark">Sửa thông tin đăng ký</h2>

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
                Mật khẩu của bạn là gì?
                <input type="password" name="password" required placeholder="Mật khẩu bạn đặt lúc đăng ký đó">
            </label>
            
            <div onclick="document.getElementById('form_update').submit()" class="btn btn1">Cập nhật</div>
        </form>

        <!-- Remove -->
        <form action="./?action=remove&id=<?php echo $id; ?>" method='post' id='form_remove' hidden>
            <h2 class="text-red-dark">Xoá thông tin đăng ký</h2>

            <label>
                Mật khẩu của bạn là gì?
                <input type="password" name="password" required placeholder="Mật khẩu bạn đặt lúc đăng ký đó">
            </label>
            
            <div onclick="document.getElementById('form_remove').submit()" class="btn btn1">Cập nhật</div>
        </form>
    </div>
</body>
</html>