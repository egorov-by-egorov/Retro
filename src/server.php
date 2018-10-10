<?php
  // $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
  // if ($contentType === "application/json") {
  //   //Receive the RAW post data.
  //   $content = trim(file_get_contents("php://input"));

  //   $decoded = json_decode($content, true);

  //   //If json_decode failed, the JSON is invalid.
  //   if(! is_array($decoded)) {

  //   } else {
  //     // Send error back to user.
  //   }
  // }
  // if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  //   $name = $_POST['name'];
  //   $email = $_POST['email'];
  //   echo $name, $email;
// }
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
    <h2>ЗАКАЗ</h2>
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
    $data['mes'] = "Заказ успешно отправлен";
  } else {
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
  }
  echo json_encode($data);
?>

