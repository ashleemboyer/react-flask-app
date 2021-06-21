import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  const [data, setData] = useState({ res: null, isLoading: true });

  useEffect(() => {
    fetch('/api/currentTime')
      .then((res) => res.json())
      .then(({ currentTime }) =>
        setData({
          res: currentTime,
          isLoading: false,
        })
      )
      .catch((err) => {
        console.error(err);
        setData({ res: `Error: ${err}`, isLoading: false });
      });
  }, []);

  return (
    <main>
      <h1>Hello, world!!!</h1>
      {data.isLoading ? <p>Loading...</p> : <p>API result: {data.res}</p>}
    </main>
  );
};

export default hot(module)(App);
