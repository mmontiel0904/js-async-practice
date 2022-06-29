import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi) => {
    return fetch(urlApi);
}

const id = 228;


fetchData(`${API}/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log('End'));