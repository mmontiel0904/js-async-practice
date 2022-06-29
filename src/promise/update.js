import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const updateData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
};

const id = 229;

const data = {
    "title": "Marcos Montiel product",
    "price": 9999,
    "description": "MM update this product on Jun 28th 2022",
}


updateData(`${API}/products/${id}`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log('End'));