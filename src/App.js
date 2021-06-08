import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import List from "./components/comments/List";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Comment from "./components/comments/Comment";
import Create from "./components/comments/Create";
import Edit from "./components/comments/Edit";

function App() {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={About} path="/about" />
            <Route exact component={List} path="/comments" />
            <Route exact component={Comment} path="/comment/:postID" />
            <Route exact component={Create} path="/create" />
            <Route exact component={Edit} path="/edit/:postID" />
          </Switch>{" "}
        </BrowserRouter>{" "}
      </div>{" "}
    </Provider>
  );
}

export default App;
