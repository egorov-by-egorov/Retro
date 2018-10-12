<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    echo $name, $email;
}
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  // }
  $mail_message = '
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h2>Обращение</h2>
    <ul>
      <li>Имя: ' .$name. '</li>
      <li>Телефон: ' .$phone. '</li>
      <li>Email: ' .$email. '</li>
      <li>Тема: ' .$subject. '</li>
      <li>Сообщение: ' .$message. '</li>
    </ul>
  </body>
  </html>';

  $headers = "From: retro site <egorov-by-egorov@mail.ru>\r\n".
  "MIME-Version: 1.0" . "\r\n" .
  "Content-type: text/html; charset=UTF-8" . "\r\n";
  $mail = mail('egorov-family@mail.ru', 'Заказ', $mail_message, $headers);
  $data = [];
  if ($mail) {
    $data['status'] = "OK";
  } else {
    $data['status'] = "NO";
  }
  echo json_encode($data);
?>

