const fetchProductEndpoint = (endpoint) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`);

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (p) => {
  if (!param) throw new Error('Termo de busca não informado');
  try {
    const response = await fetchProductEndpoint(p);
    const data = await response.json();
    return data.results;
  } catch {
    return false;
  }
};
