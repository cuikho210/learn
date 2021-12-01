<?php
$name = isset($_POST['name']) ? $_POST['name'] : false;
$age = isset($_POST['age']) ? $_POST['age'] : false;
$gender = isset($_POST['gender']) ? $_POST['gender'] : false;
$email = isset($_POST['email']) ? $_POST['email'] : false;

$isSubmit = false;
$isError = false;

if ($name !== false && $age !== false && $gender !== false && $email !== false) {
    $isSubmit = true;

    // Validate
    $name = validate($name);
    $age = validate($age);
    $gender = validate($gender);
    $email = validate($email);

    // Connect Database
    $conn = mysqli_connect('localhost', 'u863046739_learn', 'Learn@123', 'u863046739_learn');
    mysqli_set_charset($conn, 'utf8');

    // Query
    $query = "insert into buoi3 (name, gender, age, email) values ('$name', $gender, '$age', '$email')";
    $result = mysqli_query($conn, $query);

    if (!$result) $isError = true;
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thêm Thành Viên</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="" method='post' class="tag">
        <h2>
            <?php
                if ($isSubmit) {
                    if ($isError) echo "Lỗi!";
                    else echo "Thêm thành viên thành công!";
                }
                else {
                    echo "Vui lòng thêm thành viên";
                }
            ?>
        </h2>

        <p>
            <?php
                if ($isSubmit) {
                    if ($isError) echo mysqli_error($conn);
                    else echo "Đã thêm thành viên rồi nha, vui lòng trở về <a href='../'>Trang chủ<a> để xem nha!";
                }
                else {
                    echo "Lớp ít người quá tuyển thêm đi huhu em buồn :((";
                }
            ?>
        </p>

        <label>
            Tên thành viên
            <input type="text" name="name" required>
        </label>

        <label>
            Tuổi
            <input type="number" name="age" required>
        </label>

        <label>
            Email
            <input type="email" name="email" required>
        </label>

        <div>
            Giới tính
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

        <button type="submit" class="btn btn1">OK</button>
    </form>
</body>
</html>

<?php
// Disconnect
if ($isSubmit) mysqli_close($conn);

function validate ($str) {
    $str = str_replace('`', '', $str);
    $str = str_replace('\'', '&#39;', $str);
    $str = str_replace('<', '&lt;', $str);
    $str = str_replace('>', '&gt;', $str);

    return $str;
}
?>