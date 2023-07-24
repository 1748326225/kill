<?php
// 数据库连接参数
$servername = "sql212.epizy.com";//主机地址
$dbname= "epiz_34346371_kill";//数据库名称
$username = "epiz_34346371";//数据库用户名
$password = "2jnvaZJc4gQ5SA";//数据库密码

// 创建数据库连接
$conn = mysqli_connect($servername, $username, $password, $dbname);

// 检测数据库连接是否成功
if (!$conn) {
  // 弹窗提醒数据库连接失败
  echo "<script>alert('数据库连接失败！');</script>";
  exit;
}

// 获取表单数据
$nickname = $_POST["nickname"];
$username = $_POST["username"];
$password = $_POST["password"];
$avatar = $_FILES["avatar"]["tmp_name"];

// 判断用户名是否已存在
$sql = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
  // 弹窗提醒该邮箱已被注册，请选择其他邮箱
  echo "<script>alert('该邮箱已被注册，请选择其他邮箱。');</script>";
  exit;
}

// 判断头像是否上传
if ($_FILES["avatar"]["error"] !== UPLOAD_ERR_OK || !is_uploaded_file($avatar)) {
  // 弹窗提醒必须上传头像，请重新上传
  echo "<script>alert('必须上传头像，请重新上传。');</script>";
  echo "<script>window.location.href = '../files/dl.php#register';</script>";
  exit;
}

// 判断头像大小是否超过 500KB
if ($_FILES["avatar"]["size"] > 1048576) {
  // 弹窗提醒上传的头像不能大于 1mb，请重新上传
  echo "<script>alert('上传的头像不能大于 1mb，请重新上传。');</script>";
  echo "<script>window.location.href = '../files/dl.php#register';</script>";
  exit;
}

// 将头像转换为二进制数据，并添加 addslashes 防止 SQL 注入
$blobAvatar = addslashes(file_get_contents($avatar));

// 插入用户信息到数据库
$sql = "INSERT INTO users (nickname, username, password, avatar) VALUES ('$nickname', '$username', '$password', '$blobAvatar')";
if (mysqli_query($conn, $sql)) {
  // 弹窗提醒注册成功
  echo "<script>alert('注册成功！');</script>";
  echo "<script>window.location.href = '../index.php';</script>";
} else {
  // 弹窗提醒注册失败，并输出错误信息
  echo "<script>alert('注册失败：" . mysqli_error($conn) . "');</script>";
  echo "<script>window.location.href = '../files/dl.php#register';</script>";
}

// 关闭数据库连接
mysqli_close($conn);
?>
