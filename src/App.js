import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';

import "./css/tailwind.output.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <main className="w-full h-full" style={{ minHeight: "100vh" }}>
          <Switch>
            <Redirect from="/" exact to="/all" />
            <Route path="/all" component={List} />
            <Route path="/surveys/:id" component={Detail} />
          </Switch>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
