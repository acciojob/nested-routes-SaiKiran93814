// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <h2>App crashed: {this.state.error.message}</h2>;
    }
    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
