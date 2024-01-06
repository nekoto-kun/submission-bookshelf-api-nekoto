import {
  addBookHandler,
  deleteBookHandler,
  getBookHandler,
  listBooksHandler,
  updateBookHandler
} from './handler.js'

const routes = [
  {
    method: 'POST',
    url: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    url: '/books',
    handler: listBooksHandler
  },
  {
    method: 'GET',
    url: '/books/{bookId}',
    handler: getBookHandler
  },
  {
    method: 'PUT',
    url: '/books/{bookId}',
    handler: updateBookHandler
  },
  {
    method: 'DELETE',
    url: '/books/{bookId}',
    handler: deleteBookHandler
  },
]

export default routes