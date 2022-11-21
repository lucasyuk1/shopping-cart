const iCep = document.querySelector('.cep-input');
const cartAddress = document.querySelector('.cart__address');

export const getAddress = async (cep) => {
  const error404 = 404;
  const req1 = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const req2 = fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const address = await Promise.any([req1, req2])
    .then((resp) => {
      if (resp.status === error404) {
        throw new Error('CEP não encontrado');
      }
      return resp.json();
    })
    .then((data) => data)
    .catch(() => { throw new Error('CEP não encontrado'); });
  return address;
};

export const searchCep = async () => {
  try {
    const cep = iCep.value;
    const data = await getAddress(cep);
    const { street, address, neighborhood, district,
      city, state } = data;
    const res = `${street || address} - ${neighborhood || district} - ${city} - ${state}`;
    cartAddress.innerHTML = res;
  } catch (e) {
    cartAddress.innerText = e.message;
  }
};
