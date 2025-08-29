import './App.css';

const RTr = {
  prefix: 'The Road To ',
  title: 'React',
};

function getTitle(type?: string) {
  if (type === 'heading') return <h1>{RTr.prefix + RTr.title}</h1>;
  return RTr.prefix + RTr.title;
}

function App() {
  return (
    <>
      {getTitle('heading')}
      {getTitle()}

      <p>
        <label>
          Text Box <br />
          <input type='text'></input>
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
