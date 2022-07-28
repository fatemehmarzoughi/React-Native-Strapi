/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Main from './pages/main';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from "./reducers/index";

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {

    return(
      <Provider store={store}>
        <Main />
      </Provider>
    )
}

export default App;