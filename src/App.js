import { Fragment } from 'react';
import Header from './coponents/Layout/Header';
import Meals from './coponents/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
