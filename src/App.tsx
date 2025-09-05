import React from 'react';
import './App.css';

function getTitle(type?: string): React.ReactElement {
  const RTr = {
    prefix: 'The Road To ',
    title: 'React',
  };

  if (type === 'heading') {
    return React.createElement('h1', null, `${RTr.prefix + RTr.title}`);
  }
  return <strong>React + TypeScript</strong>;
}

const initialPosts = [
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
  {
    title: 'DaisyUI',
    url: 'https://daisyui.com/',
    author: 'Cherry Popeye',
    num_comments: 7,
    points: 3,
    objectID: 2,
  },
];

function maxBy<T>(getProp: (object: T) => number): (max: T, current: T) => T {
  return (max: T, current: T) =>
    getProp(current) > getProp(max) ? current : max;
}

function App() {
  return (
    <>
      {getTitle('heading')}
      {getTitle('sub-heading')}
      <Form />
      <List />
    </>
  );
}

function Form() {
  return (
    <>
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

function List() {
  const [posts, setPosts] = React.useState(initialPosts);
  const handleReverse = () => {
    setPosts(posts.slice().reverse());
  };

  const highScorePost = posts.reduce(
    maxBy((post) => post.points),
    /*uses*/ posts[0]
  );
  return (
    <>
      <p>
        {`Post Highscore : ${highScorePost.title.toUpperCase()} with ${
          highScorePost.points
        } points`}
      </p>

      <p>
        <dl>
          {posts.map((item) => (
            <dt key={item.objectID}>
              {item.objectID}:{' '}
              <a href={item.url}>
                <b>{item.title} </b>
              </a>
              <input type='checkbox' />
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
        <button onClick={handleReverse}>Reverse Posts</button>
      </p>
    </>
  );
}

export default App;
