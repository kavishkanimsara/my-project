import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ToggleTheme from './ToggleTheme';
import { BookContext } from '../../context/BookContext';
import { Books } from './AddBooks';

const BookList = () => {
  const { isDarkMode, light, dark } = useContext(ThemeContext);
  const { books, dispatch } = useContext(BookContext); 
  const theme = isDarkMode ? dark : light;

  return (
      <div>
          {books.length ? (
              books.map((book) => (
                  <div
                      key={book.id}
                      style={{ background: theme.ui, color: theme.syntax }}
                  >
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                      <button
                          onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })} // Correct action type to 'REMOVE_BOOK'
                      >
                          Remove
                      </button>
                  </div>
              ))
          ) : (
              <p>No books available</p>
          )}
          <Books />
          <ToggleTheme />
      </div>
  );
};

export default BookList;
