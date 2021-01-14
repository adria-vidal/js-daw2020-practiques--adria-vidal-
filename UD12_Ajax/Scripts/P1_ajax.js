const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

 function procesarFetch(numsecs, user) 
  let id = document.querySelector('id');
  let email = document.querySelector('email');
  let name = document.querySelector('name');
  let status = document.querySelector('status');
  const url_retraso = BASE_URL + user + '?delay=' + numsecs;
  
  fetch(url_retraso)
    .then((res) => {
    /**
     * cuando la primera API responda coin un error
     * la respuesta será false y lanzará un error
     */
    if (res.ok == false) throw new Error(res.status);
    else{
    return res.json();
  }
  })

    .then((txtJson) => {
      
      email.innerHTML = txtJson.data.email;
      id.innerHTML = txtJson.data.id;

      const envio = {
        headers: {
          'Content-type':
           'application/json; charset=UTF-8',
        },
        body: JSON.stringify(txtJson.data),
        method: 'POST',
      };
      /**
       * Enviamos con Post a la segunda URL los datos de la primera
       */
      fetch(POSTMAN_URL, envio)
        .then((res) => {
          return res.json();
        })
        .then((txtJson) => {
          name.innerHTML = txtJson.json.first_name;
          /** status 200 es OK */
          status.innerHTML = 200;
        });
    })
    /** Tratamos el error */
    .catch((err) => {
      status.innerHTML = err.message;
    });
