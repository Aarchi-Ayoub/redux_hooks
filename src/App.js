import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const { BrowserRouter, Switch, Route } = require("react-router-dom");

const { default: Navbar } = require("./components/navbar/Navbar");
const { default: List } = require("./components/comments/List");
const { default: Home } = require("./components/pages/Home");
const { default: About } = require("./components/pages/About");
const { default: Comment } = require("./components/comments/Comment");
const { default: Create } = require("./components/comments/Create");

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
          </Switch>{" "}
        </BrowserRouter>{" "}
      </div>{" "}
    </Provider>
  );
}

export default App;
