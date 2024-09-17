import React, { createContext, useState ,useReducer} from 'react';
import { bookReducer } from '../reducer/bookReducer';

export const BookContext = createContext();

//<---------------with reducers----------------->

const BookContextProvider = (props) => {
     const[books , dispatch] = useReducer(bookReducer,[] ,()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
     });
    return (
        <BookContext.Provider value={{books , dispatch} }>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;



//<---------------without reducers----------------->
// const BookContextProvider = (props) => {
//     const [books, setBooks] = useState([
//         { title: 'Name of the Wind', author: 'Patrick Rothfuss', id: 1 },
//         { title: 'The Final Empire', author: 'Brandon Sanderson', id: 2 }
//     ]);

//     const addBook = (title, author) => {
//         setBooks([...books, { title, author, id: books.length + 1 }]);
//     }

//     const removeBook = (id) => {
//         setBooks(books.filter(book => book.id !== id));
//     }
//     return (
//         <BookContext.Provider value={{ books,addBook: addBook ,removeBook :removeBook} }>
//             {props.children}
//         </BookContext.Provider>
//     );
// };

// export default BookContextProvider;



