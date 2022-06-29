import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi) => {
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        const prod1 = products[0];
        console.log(prod1);
        return fetchData(`${API}/products/${prod1.id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product);
        return fetchData(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => console.log(category));
