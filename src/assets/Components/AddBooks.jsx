import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';

export const Books = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(BookContext);

  const handleAddBook = () => {
    if (title.trim() && author.trim()) { 
      dispatch({
        type: 'ADD_BOOK',
        book: { title, author },
      });
      setTitle(''); 
      setAuthor(''); 
    }
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <div>
        <label>
          Title:
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter book title"
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            placeholder="Enter author name"
          />
        </label>
      </div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default Books;




// export const Books = () => {
//     const [author, setAuthor] = useState('');
//     const [title, setTitle] = useState('');
//     const {books,addBook,removeBook} = useContext(BookContext);
//   return (
//     <div>
//         <h1>Title :{title}</h1>
//         <h1>Author :{author}</h1>
//         <input type="text"  onChange={(e)=>setAuthor(e.target.value)}  value={author}/>
//         <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
//         <button onClick={()=>addBook(title,author)}>Add Book</button>
//     </div>
//   )
// }
