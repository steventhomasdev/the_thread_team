import React from 'react';
import { observer } from 'mobx-react';
import { Layout, Menu } from 'antd';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

function TopMenu({ location }:RouteComponentProps) {
  return (
    <div id="topMenu" />
  );
}

export default withRouter(observer(TopMenu));
