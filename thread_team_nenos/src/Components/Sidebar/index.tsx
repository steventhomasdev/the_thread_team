/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { observer } from 'mobx-react';
import { Layout, Menu } from 'antd';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import Routes from '../../Global/Routes';
import './Sidebar.less';
import OrganizationImage from '../../Assets/Images/logo.png';

function Sidebar({ location }:RouteComponentProps) {
  return (
    <Layout.Sider id="sidebar">
      <div className="drawer-logo pl-4">
        <img src={OrganizationImage} className="mr-3" height={40} alt="" />
        <div className="">
          <strong>The Thread Company</strong>
        </div>
      </div>
      <Menu
        className="border-0"
        selectedKeys={[location.pathname]}
        mode="inline"
      >
        <Menu.Item key={Routes.all}>
          <NavLink to={Routes.all}>All</NavLink>
        </Menu.Item>
        <Menu.Item key={Routes.boys}>
          <NavLink to={Routes.boys}>Boys</NavLink>
        </Menu.Item>
        <Menu.Item key={Routes.girls}>
          <NavLink to={Routes.girls}>Girls</NavLink>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default withRouter(observer(Sidebar));
