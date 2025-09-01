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

const maxOfTwoNumbers = (num1: number, num2: number) =>
  num1 > num2 ? num1 : num2;

function App() {
  const [posts, setPosts] = React.useState(initialPosts);
  const handleReverse = () => {
    setPosts(posts.slice().reverse());
  };
  const highScorePost = posts.reduce((max, current) =>
    max.points > current.points ? max : current
  );

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
        Points Highscore (Map-&gt;Reduce):{' '}
        {posts.map((post) => post.points).reduce(maxOfTwoNumbers)}
        <br />
        {
          `Post Highscore : ${highScorePost.title.toUpperCase()} with ${highScorePost.points} points`
        }
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
