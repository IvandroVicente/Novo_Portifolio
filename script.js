function validateForm() {
    var email = document.getElementById('email').value;
    var receiverEmail = document.getElementById('receiverEmail').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email.match(emailRegex)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }
  
    if (!receiverEmail.match(emailRegex)) {
      alert('Por favor, insira um e-mail de recebimento válido.');
      return false;
    }
  
    // Envie os dados para o servidor ou faça outras ações necessárias aqui
    console.log('E-mail do remetente:', email);
    console.log('E-mail de recebimento:', receiverEmail);
  
    // Limpe os campos após o envio (opcional)
    document.getElementById('email').value = '';
    document.getElementById('receiverEmail').value = '';
  
    return true;
  }
  