/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import ApplicationRoutes from './Routing/ApplicationRoutes';
import './App.less';

export class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <ApplicationRoutes />
        </Layout>
      </Router>
    );
  }
}

export default App;
