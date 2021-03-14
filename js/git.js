const urlApi = 'https://api.github.com/users/jramos22/repos';

function contenedor(data, i) {
  const contul = document.getElementById('lista');
  const lista = document.createElement('li');
  contul.appendChild(lista);
  const content = `
  <div class ="contgit">
  <h2 class="titulo">${data[i].name}</h2>
  <p class="info">Lenguage: ${data[i].language || 'no especificado'}</p>
  <p class="info"><a href="${data[i].html_url}">go to repository</a></p>
  <p class="info">created: ${data[i].created_at}</p>
  <p class="info">Last Update: ${data[i].updated_at}</p>
  </div>`;
  lista.innerHTML = content;
}

function api() {
  // Llamo la lista de resultados.
  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        contenedor(data, i);
      }
    });
}
api();
