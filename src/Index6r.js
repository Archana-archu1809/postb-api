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
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const text1 = (
  <>
    <Row>
      <Col md={2} sm={24}>
        <h5>Job.No</h5>
      </Col>
      <Col md={1} sm={24}>
        <h5>Dt</h5>
      </Col>
      <Col md={2} sm={24}>
        <h5>In_Charge</h5>
      </Col>
      <Col md={2} sm={24}>
        <h5>Customer</h5>
      </Col>
      <Col md={2} sm={24}>
        <h5>IGM_dt</h5>
      </Col>
      <Col md={2} sm={24}>
        <h5>BE_dt</h5>
      </Col>
      <Col md={2} sm={24}>
        <h5>OOC_dt</h5>
      </Col>
      <Col md={2} sm={24}>
        <h5>CLR_dt</h5>
      </Col>
      <Col md={2} col sm={24}>
        <h5>DEL_dt</h5>
      </Col>
      <Col md={3} col sm={24}>
        <h5> H/O-A/C dt</h5>
      </Col>
      <Col md={2} col sm={24}>
        <h5>BILLED_dt</h5>
      </Col>
    </Row>
  </>
);

function Index6() {
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
              <a href="#operation" style={{ color: "gray" }}>
                Operations
              </a>
              <a href="#exception" style={{ color: "gray" }}>
                Exceptions
              </a>
              <a href="#account" style={{ color: "gray" }}>
                Accounting
              </a>
              <a href="#management" style={{ color: "gray" }}>
                Management
              </a>
              <a href="#alert" style={{ color: "gray" }}>
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
              <a href="#">
                <SearchOutlined style={{ paddingRight: 10, color: "black" }} />
              </a>
              <a href="#">
                <Badge size="small" count={3}>
                  <WechatOutlined style={{ paddingRight: 6, color: "black" }} />
                </Badge>
              </a>
              <a href="#">
                <Badge size="small" count={15}>
                  <BellOutlined style={{ paddingRight: 6, color: "black" }} />
                </Badge>
              </a>
              <a href="#">
                <FullscreenOutlined
                  style={{ paddingRight: 6, color: "black" }}
                />
              </a>
              <a href="#">
                <PoweroffOutlined style={{ paddingRight: 6, color: "black" }} />
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
            <h1>Alert</h1>
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
              <Breadcrumb.Item>Alert</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <Collapse accordion>
              <Panel header="Be Not Filled" key="1" extra="-">
                <h3>{text1}</h3>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <Collapse accordion>
              <Panel header="Landed-No BE" key="1" extra="-">
                <h3>{text1}</h3>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <Collapse accordion>
              <Panel header="Not cleared" key="1" extra="-">
                <h3>{text1}</h3>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <Collapse accordion>
              <Panel header="Yet to taken Delivery" key="1" extra="-">
                <h3>{text1}</h3>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <Collapse accordion>
              <Panel header="Operation on hold" key="1" extra="-">
                <h3>{text1}</h3>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row>
          <Col
            md={12}
            col
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
    </>
  );
}
export default Index6;
