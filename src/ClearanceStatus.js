import {
  Drawer,
  Button,
  Layout,
  Row,
  Col,
  Space,
  Badge,
  Breadcrumb,
  Collapse,
  Input,
  Divider,
} from "antd";
import LeftMenu from "./leftMenu";
import { useState } from "react";

import {
  SearchOutlined,
  WechatOutlined,
  BellOutlined,
  FullscreenOutlined,
  PoweroffOutlined,
  CopyrightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const text1 = (
  <>
    <Row style={{ float: "right" }}>
      <Col>
        <label>Search:</label>
      </Col>

      <Col>
        <Input />
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={3} sm={24}>
        <h5>Job_No</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>

      <Col md={3} sm={24}>
        <h5>Duty Paid</h5>
      </Col>
      <Col md={3}>
        <h5>BC Paid</h5>
      </Col>
      <Col md={3}>
        <h5>Authority Paid</h5>
      </Col>
      <Col md={3}>
        <h5>Date</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>PIC</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>Customer</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>PKG</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>G.R.Weight</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>Container</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>Cleared</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>CLS</h5>
        <h5>Delay</h5>
        <h5>Reason</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
      <Col md={3}>
        <h5>Delivered</h5>
      </Col>
      <Col md={3}>
        <h5>Delivery</h5>
        <h5>Delay</h5>
        <h5>Reason</h5>
        <ArrowUpOutlined />
        <ArrowDownOutlined />
      </Col>
    </Row>
  </>
);
function Clearance() {
  const [visible, SetVisible] = useState(false);

  const showDrawer = () => {
    SetVisible(true);
  };
  const onClose = () => {
    SetVisible(false);
  };
  return (
    <>
      <nav className="menuBar">
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={showDrawer}>
            <MenuUnfoldOutlined style={{ color: "blue" }} />
          </Button>
          <Drawer
            title="basic drawer"
            placement="right"
            closable="true"
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </nav>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <Row>
            <Col
              md={12}
              sm={24}
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Space>
                <a href="" style={{ color: "gray" }}>
                  Operations
                </a>
                <a href="" style={{ color: "gray" }}>
                  Exceptions
                </a>
                <a href="" style={{ color: "gray" }}>
                  Accounting
                </a>
                <a href="" style={{ color: "gray" }}>
                  Management
                </a>
                <a href="" style={{ color: "gray" }}>
                  Alert
                </a>
              </Space>
            </Col>

            <Col
              md={12}
              sm={24}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Space>
                <a href="">
                  <SearchOutlined
                    style={{ paddingRight: 10, color: "black" }}
                  />
                </a>
                <a href="">
                  <Badge size="small" count={3}>
                    <WechatOutlined
                      style={{ paddingRight: 6, color: "black" }}
                    />
                  </Badge>
                </a>
                <a href="">
                  <Badge size="small" count={15}>
                    <BellOutlined style={{ paddingRight: 6, color: "black" }} />
                  </Badge>
                </a>
                <a href="">
                  <FullscreenOutlined
                    style={{ paddingRight: 6, color: "black" }}
                  />
                </a>
                <a href="">
                  <PoweroffOutlined
                    style={{ paddingRight: 6, color: "black" }}
                  />
                </a>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "30px" }}>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <h1>Clearance Status</h1>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="" style={{ color: "blue" }}>
                    Home
                  </a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Clearance Status</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={24}>
              <Collapse accordion>
                <Panel header="Clearance Status Update" key="1" extra="-">
                  <h1>{text1}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Content>
        <Footer style={{ backgroundColor: "white" }}>
          <Row>
            <Col
              md={12}
              sm={24}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                color: "gray",
              }}
            >
              <Space>
                <b> Copyright</b>
                <CopyrightOutlined />
                <b> 2021</b>
                <a href="" style={{ fontWeight: "bold" }}>
                  G TECH.
                </a>
                All rights reserved.
              </Space>
            </Col>
            <Col
              md={12}
              sm={24}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                color: "gray",
              }}
            >
              <Space>
                <b> Version</b> 3.1.0
              </Space>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
}
export default Clearance;
