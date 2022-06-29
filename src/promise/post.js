import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const prostData = (urlApi, data) => {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
};

const newProduct = {
    "title": "Producto MMC",
    "price": 1010,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

await prostData(`${API}/products`, newProduct)
    .then(response => response.json())
    .then(newProduct => console.log(newProduct))
    .catch((error) => console.error(error))
    .finally(() => console.log('Function finished'));





