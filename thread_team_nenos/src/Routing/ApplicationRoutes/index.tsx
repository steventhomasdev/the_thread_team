/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import {
  Dashboard,
} from '../../Pages';
import {
  Header,
  Sidebar,
  TopMenu
} from '../../Components';
import AsideDrawer from '../../Components/AsideDrawer';
import Routes from '../../Global/Routes';
import './style.css';

const MainComponent = () => (
  <Layout>
    <Header />
    <Layout>
      <div className="sidemenu-wrapper">
        <Sidebar />
      </div>
      <div className="left-drawer">
        <AsideDrawer />
      </div>
      <Layout.Content className="px-2 px-sm-4 pb-4 pt-5 mt-4 mt-lg-0 pt-lg-4">
        <Switch>
          <Route path={Routes.home} exact>
            <Redirect to={Routes.all} />
          </Route>
          <Route
            path={Routes.all}
            component={Dashboard}
          />
        </Switch>
      </Layout.Content>
    </Layout>
  </Layout>
);

const Router = () => (
  <Switch>
    <Route path={Routes.home} component={MainComponent} />
  </Switch>
);

export default Router;
