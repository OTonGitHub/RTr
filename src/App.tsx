import React from 'react';
import './App.css';

const RTr = {
  prefix: 'The Road To ',
  title: 'React',
};

function getTitle(type?: string): unknown {
  if (type === 'heading') {
    return React.createElement('h1', null, `${RTr.prefix + RTr.title}`);
  }
  return <strong>React + TypeScript</strong>;
}

const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <>
      {getTitle('heading')}
      {getTitle()}

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

      <p>
        <dl>
          {list.map((item) => (
            <dt key={item.objectID}>
              {item.objectID}:{' '}
              <a href={item.url}>
                <b>{item.title} </b>
              </a>
              <dd>
                <b>Author: </b>
                {item.author}
              </dd>
              <dd>
                <b>Comments: </b>
                {item.num_comments}
              </dd>
              <dd>
                <b>Points: </b>
                {item.points}
              </dd>
            </dt>
          ))}
        </dl>
      </p>
    </>
  );
}

export default App;
