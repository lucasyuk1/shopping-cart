import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, addToCart } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const productSection = document.querySelector('.products');

const mainContainer = document.querySelector('.container');

document.querySelector('.cep-button').addEventListener('click', searchCep);

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

const appendProducts = async () => {
  loadingProducts();
  try {
    const apiPC = await fetchProductsList('computador');
    if (!apiPC.id) {
      removeLoading();
    }
    const arrayProduct = apiPC;
    arrayProduct.forEach((e) => {
      const { id, title, thumbnail, price } = e;
      productSection.appendChild(createProductElement({ id, title, thumbnail, price }));
    });
  } catch (error) {
    const errosMsg = 'Algum erro ocorreu, recarregue a página e tente novamente';
    productSection.innerHTML = `<span class="error">${errosMsg}</span>`;
  }
};

const loadCart = () => {
  const loadCartStorage = getSavedCartIDs();
  localStorage.clear();
  loadCartStorage.forEach((id) => {
    addToCart(id);
  });
};

loadCart();
appendProducts();
