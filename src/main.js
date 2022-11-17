import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const productSection = document.querySelector('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

const apiPC = await fetchProductsList('computador');

const arrayProduct = apiPC;

const mainContainer = document.querySelector('.container');

const loadingProducts = () => {
  const loadTxt = document.createElement('p');
  loadTxt.innerHTML = 'Carregando...';
  loadTxt.classList.add('loading');
  mainContainer.prepend(loadTxt);
};

const removeLoading = () => {
  const ldTxt = document.querySelector('.loading');
  ldTxt.remove();
};

loadingProducts();

const waitID = await fetchProductsList('computador');
if (!waitID.id) {
  removeLoading();
}

const appendProducts = () => {
  try {
    arrayProduct.forEach((e) => {
      const { id, title, thumbnail, price } = e;
      productSection.appendChild(createProductElement({ id, title, thumbnail, price }));
    });
  } catch (error) {
    const errosMsg = 'Algum erro ocorreu, recarregue a página e tente novamente';
    productSection.innerHTML = `<span class="error">${errosMsg}</span>`;
  }
};

appendProducts();
