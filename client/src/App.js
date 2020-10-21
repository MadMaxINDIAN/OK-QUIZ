import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./components/basic/Footer";
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
  <Provider store = {store}>
    <Router>
    <div className="grid-container">
    <main className="main">
        <div className="content">
            <Route path="/register" exact={true} component={Register} />
            <Route path="/login" exact={true} component={Login} />
        </div>
    </main>
    <Footer />
</div>
</Router>
</Provider>
  );
}

export default App;
