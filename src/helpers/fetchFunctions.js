const urlProductEndpoint = (endpoint) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`);
const urlIDEndpoint = (endpoint) => fetch(`https://api.mercadolibre.com/items/${endpoint}`);

export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  } else {
    const response = await urlIDEndpoint(id);
    const data = await response.json();
    return data;
  }
};

export const fetchProductsList = async (p) => {
  if (!p) {
    throw new Error('Termo de busca não informado');
  } else {
    const response = await urlProductEndpoint(p);
    const data = await response.json();
    return data.results;
  }
};
