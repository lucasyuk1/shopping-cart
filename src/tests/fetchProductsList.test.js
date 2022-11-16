import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  it('Ao executar fetchProductsList com o argumento "computador" retorna um objeto igual ao "computadorSearch"', async () => {
    const res = await fetchProductsList('computador');
    expect(res).toEqual(computadorSearch);
  });
  it('Ao executar fetchProductsList sem o argumento retorna um erro com "ID não informado"', async () => {
    const res = await fetchProductsList;
    expect(res).rejects.toThrow(new Error('Termo de busca não informado'));
  });
  // it('...', () => {
  // });
});
