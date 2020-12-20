import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// REDUX
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import { rootReducer } from './reducers/index'  // index.js

// COMPONENTS
import Title from './components/Title';
import DragonList from './components/DragonList';

const store = createStore( rootReducer )
// *** KEY CONCEPT**** - COMBINE REDUCERS IN ROOT REDUCER


function App() {
  return (
      <div className="App">
         <Title />
         <DragonList />
      </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
   <App />
</Provider>
, rootElement);
