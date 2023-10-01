<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  $receiverEmail = "ivandroufr2020@gmail.com";  // Substitua pelo seu e-mail

  $subject = "Formulário de Contato";
  $message = "Nome: " . $data['nome']. 
  "\n\nTelefone: " . $data['telefone'] .
  "\n\nE-mail: " . $data['email']. 
  "\n\nMensagem:\n" . $data['message'];

  $headers = 'From: ' . $data['email'] . "\r\n" .
             'Reply-To: ' . $data['email'] . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if (mail($receiverEmail, $subject, $message, $headers)) {
    $response = array('success' => true, 'message' => 'E-mail enviado com sucesso.');
  } else {
    $response = array('success' => false, 'message' => 'Erro ao enviar o e-mail.');
  }

  echo json_encode($response);
}
?>
