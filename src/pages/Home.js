import React, { useState, useEffect, useCallback } from "react";
import Book from "../component/Book";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
      const response = await fetch("https://anapioficeandfire.com/api/books");
      const data = await response.json();
      setBooks(data);
      setLoading(false);
  }, []);

  useEffect(() => {
    fetchBooks().catch(console.error);
  }, [fetchBooks]);

  return (
    <div className="App">
      <div className="displayed-result">
        {isLoading ? (
          <div className="lds-dual-ring"></div>
        ) : books && books.length > 0 ? (
          books.map((book, i) => (
            <Book data={book} key={i}/>
          ))
        ) : (
          <p>No result</p>
        )}
      </div>
    </div>
  );
}