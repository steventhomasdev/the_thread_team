import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import {
  MenuFoldOutlined,
} from '@ant-design/icons';
import Sidebar from '../Sidebar/index';
import './AsideDrawer.less';

const AsideDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="drawer-wrapper">
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Sidebar />
      </Drawer>
      <Button type="link" className="" onClick={showDrawer}>
        <MenuFoldOutlined style={{ fontSize: '28px' }} />
      </Button>
    </div>
  );
};

export default AsideDrawer;
