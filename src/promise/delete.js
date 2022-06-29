import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const updateData = (urlApi) => {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
    });
    return response;
};

const id = 228;


updateData(`${API}/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log('End'));