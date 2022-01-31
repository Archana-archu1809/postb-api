import {
  Layout,
  Menu,
  Breadcrumb,
  Space,
  Row,
  Col,
  Badge,
  Collapse,
  Button,
} from "antd";
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
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
const { Panel } = Collapse;
const text = (
  <Row>
    <Col md={2} sm={24}>
      Job.No
    </Col>
    <Col md={1} sm={24}>
      Dt
    </Col>
    <Col md={2} sm={24}>
      In_Charge
    </Col>
    <Col md={2} sm={24}>
      Customer
    </Col>
    <Col md={2} sm={24}>
      IGM_dt
    </Col>
    <Col md={2} sm={24}>
      BE_dt
    </Col>
    <Col md={2} sm={24}>
      OOC_dt
    </Col>
    <Col md={2} sm={24}>
      CLR_dt
    </Col>
    <Col md={2} col sm={24}>
      DEL_dt
    </Col>
    <Col md={3} col sm={24}>
      H/O-A/C dt
    </Col>
    <Col md={2} col sm={24}>
      BILLED_dt
    </Col>
  </Row>
);
const text2 = (
  <Row>
    <Col md={2} col sm={24}>
      Job.No
    </Col>
    <Col md={1} col sm={24}>
      Dt
    </Col>
    <Col md={2} col sm={24}>
      In_Charge
    </Col>
    <Col md={2} col sm={24}>
      Customer
    </Col>
    <Col md={2} col sm={24}>
      IGM_dt
    </Col>
    <Col md={2} col sm={24}>
      BE_dt
    </Col>
    <Col md={2} col sm={24}>
      OOC_dt
    </Col>
    <Col md={2} col sm={24}>
      CLR_dt
    </Col>
    <Col md={2} col sm={24}>
      DEL_dt
    </Col>
    <Col md={3} col sm={24}>
      H/O-A/C dt
    </Col>
    <Col md={2} col sm={24}>
      BILLED_dt
    </Col>
  </Row>
);
const text3 = (
  <Row>
    <Col md={2} col sm={24}>
      Job.No
    </Col>
    <Col md={1} col sm={24}>
      Dt
    </Col>
    <Col md={2} col sm={24}>
      In_Charge
    </Col>
    <Col md={2} col sm={24}>
      Customer
    </Col>
    <Col md={2} col sm={24}>
      IGM_dt
    </Col>
    <Col md={2} col sm={24}>
      BE_dt
    </Col>
    <Col md={2} col sm={24}>
      OOC_dt
    </Col>
    <Col md={2} col sm={24}>
      CLR_dt
    </Col>
    <Col md={2} col sm={24}>
      DEL_dt
    </Col>
    <Col md={3} col sm={24}>
      H/O-A/C dt
    </Col>
    <Col md={2} col sm={24}>
      BILLED_dt
    </Col>
  </Row>
);
function Index6() {
  return (
    <>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Dashboard", "Alert"]}
          >
            <Menu.Item key="Smart">Smart Solution</Menu.Item>
            <Menu.Item key="Dashboard">MIS dashboard</Menu.Item>
            <Menu.Item key="operation">Operations</Menu.Item>
            <Menu.Item key="Exception">Exceptions</Menu.Item>
            <Menu.Item key="Account">Accounting</Menu.Item>
            <Menu.Item key="Management">Management</Menu.Item>
            <Menu.Item key="Alert">Alert</Menu.Item>
            <Menu.Item key="cleared">To be Cleared</Menu.Item>
            <Menu.Item key="clearance">Clearance Status</Menu.Item>
            <Menu.Item key="bills">Bills To Accounts</Menu.Item>
            <Menu.Item key="search">Search</Menu.Item>
            <Menu.Item key="upload">Upload</Menu.Item>
            <Menu.Item key="system">System setting</Menu.Item>
            <Menu.Item key="delay clearance">Clearance Delay-codes</Menu.Item>
            <Menu.Item key="delivery delay">Delivery Delay-codes</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
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
                      <BellOutlined
                        style={{ paddingRight: 6, color: "black" }}
                      />
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
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Row>
              <Col
                md={12}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <h1>Alert</h1>
              </Col>
              <Col
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
              <Col md={24}>
                <Collapse accordion>
                  <Panel header="Esclation-Missing Data" key="1" extra="-">
                    <h1>{text}</h1>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col md={24}>
                <Collapse accordion>
                  <Panel header="Landed-No BE" key="2" extra="-">
                    <h1>{text2}</h1>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col md={24}>
                <Collapse accordion>
                  <Panel header="Not Cleared" key="3" extra="-">
                    <h1>{text3}</h1>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col md={24}>
                <Collapse accordion>
                  <Panel header="Yet to Taken Delivery" key="4" extra="-">
                    <h1>{text3}</h1>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col md={24}>
                <Collapse accordion>
                  <Panel header="Operation On Hold" key="5" extra="-">
                    <h1>{text3}</h1>
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
        </Layout>
      </Layout>
    </>
  );
}
export default Index6;
