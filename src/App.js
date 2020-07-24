import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
// Required for Redux store setup
import { Provider } from "react-redux";
import configureStore from "./store";
class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Provider>
    )
  }
}
// const App = () => (
//   <Switch>
//     <Route exact path="/" component={Home} />
//   </Switch>
// );

export default App;
