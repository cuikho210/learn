<?php
require 'db.php';
require 'func.php';

$page = empty($_GET['page']) ? 1 : $_GET['page'];
if (!is_numeric($page)) die();

$search = empty($_GET['search']) ? '' : $_GET['search'];
$search = validate($search);

// Phân trang
$post_length = get_count('select count(*) from buoi4 where name like \'%'. $search .'%\'');
$post_length_per_page = 10;
$page_length = ceil($post_length / $post_length_per_page);
$page_skip = $post_length_per_page * ($page - 1);

// Get posts
$query = "select * from buoi4 where name like '%$search%' limit $post_length_per_page offset $page_skip";
$posts = get_list($query);
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
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="tag">
        <!-- Navbar -->
        <div class="nav">
            <div class="active">Trang chủ</div>
            <a href="register"><div>Đăng ký</div></a>
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

            <a href="register"><div class="btn btn1">Đăng ký ngay!</div></a>
        </div>

        <!-- List -->
        <div>
            <h2 class="text-red-dark">Các thành viên đã đăng ký</h2>

            <form action="" method="get">
                <input type="search" name="search" placeholder="Bạn muốn tìm ai?" value="<?php echo $search; ?>">
            </form>

            <div class="list">
                <?php foreach ($posts as $post) {?>
                    <a href="user?id=<?php echo encodeID($post['id']); ?>">
                        <div>
                            <p><?php echo $post['name']; ?></p>
                            <p><?php echo $post['reason']; ?></p>
                        </div>
                    </a>
                <?php } ?>
            </div>
            <br>

            <div class="page">
                <?php for ($i = 1; $i <= $page_length; $i ++) {
                    if ($i == $page) { ?>
                        <span class='active'><?php echo $i; ?></span>
                <?php
                    }
                    else { ?>
                        <a href="./?page=<?php echo $i; ?>">
                            <span><?php echo $i; ?></span>
                        </a>
                <?php
                    }
                } ?>
            </div>
        </div>
        <br>
    </div>
</body>
</html>