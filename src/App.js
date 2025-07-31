import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Category from './components/Category';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => (
            <div>
              <h2>Welcome to Our Store</h2>
              <p>Select a category above.</p>
            </div>
          )} />
          <Route path="/:categoryId/:itemId?" component={Category} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
