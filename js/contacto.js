const form = document.getElementById('contact-form');
const error = document.getElementById('error');
const success = document.getElementById('success');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('message').value;

  if (nombre === '' || email === '' || mensaje === '') {
    error.innerHTML = 'Por favor, complete todos los campos.';
    document.getElementById('contact-form').reset();
    setTimeout(() => {
      error.innerHTML = '';
    }, 2000);
    return;
  }

  success.innerHTML = `<p>Mensaje enviado correctamente</p>
             <img
               src="https://icongr.am/entypo/check.svg?size=128&color=FFFF00"
               class=""
               alt="Mensaje enviado"
             />
         `;
});
