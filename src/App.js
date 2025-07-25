import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <h2>Index</h2>} />
           <Route path="/:categoryId/:itemId?" component={Category} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
