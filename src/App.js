import React from 'react';

function Food({fav}) {
  return <h2>I love {fav}</h2>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="chicken" />
      <Food fav="pizza" />
      <Food fav="ramen" />
      <Food fav="pork" />
    </div>
  );
}

export default App;
