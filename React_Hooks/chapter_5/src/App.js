import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronComponent from './JumbotronComponent';
import Products from './Products';

function App() {
  return (
    <div>
      <JumbotronComponent>
        This is a <strong>long</strong> sentence, and I want to
        insert content into the jumbotron component from the outside.
      </JumbotronComponent>
      <Products />
    </div>
  );
}

export default App;