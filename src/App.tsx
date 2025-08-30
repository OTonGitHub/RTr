import React from 'react';
import './App.css';

const RTr = {
  prefix: 'The Road To ',
  title: 'React',
};

const NirDobovizki = {
  title: 'C# Concurrency',
  pages: 350,
};

const StephenCleary = {
  title: 'Concurrency in C# Cookbook',
  pages: 250_000_000_000_000_00,
  price: 23.55,
};

const RobertSedgewick = {
  title: 'Algorithms',
  pages: 10n,
  price: 5.44,
};

const bookList = [NirDobovizki, StephenCleary, RobertSedgewick];

function getTitle(type?: string) {
  if (type === 'heading') {
    return React.createElement('h1', null, `${RTr.prefix + RTr.title}`);
  }
  return 'React + TypeScript';
}

function getBooks() {
  return (
    <ul>
      {bookList.map((book) => (
        <li>
          <div>Title: {book.title}</div>
          <div>Pages: {book.pages}</div>
          <div>
            Safe: <strong>{String(Number.isSafeInteger(book.pages))}</strong>
          </div>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      {getTitle('heading')}
      {getTitle()}
      <p>{getBooks()}</p>

      <p>
        <label>
          Text: <input type='text'></input>
        </label>
      </p>

      <p>
        <label htmlFor='Date'>Date</label>
        <br />
        <input id='Date' type='date'></input>
      </p>
    </>
  );
}

export default App;
