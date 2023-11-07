import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление объекта Movie в корзину', () => {
  const cart = new Cart();
  const movie = new Movie(999, 'Мстители', 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, приключения', '137 мин./02:17', 299);
  cart.add(movie);

  expect(cart.items.length).toBe(1);
});


test('Расчет суммы товаров в корзине без скидки', () => {
  const cart = new Cart();
  const album1 = new MusicAlbum(1, 'albumname1', 'author1', 900);
  const album2 = new MusicAlbum(2, 'albumname2', 'author2', 800);
  const book = new Book(3, 'bookname1', 'bookauthor1', 1000, 500);
  cart.add(album1);
  cart.add(album2);
  cart.add(book);
  
  expect(cart.sum()).toBe(2700);
});


test('Расчет суммы товаров в корзине со скидкой', () => {
  const cart = new Cart();
  const album1 = new MusicAlbum(1, 'albumname1', 'author1', 900);
  const album2 = new MusicAlbum(2, 'albumname2', 'author2', 800);
  const book = new Book(3, 'bookname1', 'bookauthor1', 1000, 500);
  cart.add(album1);
  cart.add(album2);
  cart.add(book);
  
  expect(cart.discountSum(0.2)).toBe(2160);
});

test('Удаление товара по id', () => {
  const cart = new Cart();
  const album1 = new MusicAlbum(1, 'albumname1', 'author1', 900);
  cart.add(album1);
  cart.deleteProduct(1);

  expect(cart.items.length).toBe(0);
});

