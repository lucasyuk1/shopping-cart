import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productSection = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const apiPC = await fetchProductsList('computador');

const arrayProduct = apiPC;

const appendProducts = () => {
  arrayProduct.forEach((e) => {
    const { id, title, thumbnail, price } = e;
    productSection.appendChild(createProductElement({ id, title, thumbnail, price }));
  });
};

appendProducts();
