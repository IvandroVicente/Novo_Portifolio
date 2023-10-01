function sendEmail(event) {
  event.preventDefault();  // Prevents the default form submission

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('email').value;
  const email = document.getElementById('telefone').value;
  const message = document.getElementById('assunto').value;

  // You need to replace with your own email sending script
  // Below is a placeholder for sending email using Gmail SMTP (you'd need a server backend for this)
  window.open(`mailto:ivandroufr2020@gmail.com?subject=Contato&body=Nome:${nome} 
  %0D%0A%0D%0AEmail:${email}
  %0D%0A%0D%0ATelefone:${telefone}%0D%0A%0D%0AMensagem: ${message}`);

  // Optionally, you can redirect to a thank you page or show a thank you message
  alert('E-mail enviado com sucesso!');

  // Clear the form
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}


function sendEmail(event) {
  event.preventDefault();  // Prevents the default form submission

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const message = document.getElementById('assunto').value;

  // Send the data to a server for sending the email
  fetch('sendEmail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      telefone: telefone,
      message: message
    })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Clear the form
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('message').value = '';
}
