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
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: listBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler
  },
]

export default routes