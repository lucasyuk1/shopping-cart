import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProductsList é uma função', async () => {
    await expect(typeof fetchProduct).toBe('function');
  });

  it('Verifica se fetch é chamado', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verifica se o endpoint correto é utilizado`', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Verifica se o retorno é o objeto esperado', async () => {
    await expect(fetchProduct('MLB1405519561')).resolves.toMatchObject(product);
  });

  it('Verifica se chamando a função sem pârametro, retorna o erro esperado', async () => {
    await expect(fetchProduct()).rejects.toThrowError('ID não informado');
  });

});
