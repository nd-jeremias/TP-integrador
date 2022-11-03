const buy = document.getElementById('buy');
const clear = document.getElementById('clear');
const cantidad = document.getElementById('cantidad')
const span = document.getElementById('span')
var total;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

buy.addEventListener('click', () => {
    var text = descuento.options[descuento.selectedIndex].text; // Obtiene el texto de las opciones
    var cant = cantidad.value;
    switch(text){
        case 'Estudiante':
            total = (200*0.20)*cant;
            span.innerText=total;
            break;
        case 'Trainee':
            total = 0.5*200*cant;
            total = (200*0.50)*cant;
            span.innerText=total;
            break;
        case 'Junior':
            total = 0.85*cant;
            total = (200*0.85)*cant;
            span.innerText=total;
            break;
    }
});