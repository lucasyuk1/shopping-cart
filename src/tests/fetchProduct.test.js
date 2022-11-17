import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  });

  it('Ao executar fetchProduct com o argumento "MLB1405519561" retorna um objeto igual ao "product"', async () => {
    const res = await fetchProduct('MLB1405519561');
    expect(res).toEqual(product);
  });

  it('Ao executar fetchProduct sem o argumento retorna um erro com "ID não informado"', async () => {
    const res = await fetchProduct;
    const erro = 'ID não informado';
    expect(res).rejects.toThrow(erro);
  });
});
