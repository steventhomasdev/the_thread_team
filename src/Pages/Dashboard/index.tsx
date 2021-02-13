import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  Layout,
  Row,
  Col,
  Spin,
  Statistic,
} from 'antd';
import notification from '../../Global/Notification';
import './Dashboard.less';

function Dashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <Layout.Content>
      <div className="rounded mb-4">
        <Spin spinning={loading}>
          <Row className="align-items-center mb-3" gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 6 }} className="mb-3 gutter-row">
              <div className="p-4 bg-white hgt">
                <Statistic title="card 1" value={1} />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mb-3" gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 6 }} className="mb-3 gutter-row">
              <div className="p-4 bg-white hgt">
                <Statistic title="card 2" value={123} />
              </div>
            </Col>
          </Row>
        </Spin>
      </div>
    </Layout.Content>
  );
}

export default observer(Dashboard);
