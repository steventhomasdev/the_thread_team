import React from 'react';
import {
  Layout, Typography, Popconfirm, Row, Col,
} from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import './Header.less';
import { observer } from 'mobx-react';
import OrganizationImage from '../../Assets/Images/logo.png';

function Header() {
  return (
    <Layout.Header id="header" className="px-4">
      <Layout.Content className="d-flex justify-content-between">
        <Typography.Text strong>
          <div>
            <Row>
              <Col><img src={OrganizationImage} className="mr-3" height={50} alt="" /></Col>
              <Col className="d-none d-md-flex d-lg-flex headerText">
                The Thread Team
              </Col>
              <Col className="d-flex d-md-none d-lg-none">
                The Thread Team
              </Col>
            </Row>
          </div>
        </Typography.Text>
        <div className="d-flex align-items-center logout-wrapper">
          <Typography.Text className="mr-4 headerText">John</Typography.Text>
          <Popconfirm
            placement="bottomRight"
            title="Are you sure you want to logout?"
            onConfirm={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <LogoutOutlined />
          </Popconfirm>
        </div>
      </Layout.Content>
    </Layout.Header>
  );
}

export default observer(Header);
