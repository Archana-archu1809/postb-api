import IndexMenu from "./Index2Menu";
import {
  Drawer,
  Button,
  Layout,
  Row,
  Col,
  Space,
  Badge,
  Breadcrumb,
  Card,
  Collapse,
  Progress,
  Select,
  Input,
  Divider,
  DatePicker,
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
  SettingOutlined,
  LikeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const text1 = (
  <>
    <Row>
      <Col md={12} offset={3}>
        <h5> Sales:1Jan,2014-30July,2014</h5>
      </Col>
      <Col md={8}>
        <h5>Goals Completion</h5>
      </Col>
    </Row>
    <Row>
      <Col md={12} offset={12} sm={24}>
        <h5 style={{ display: "flex", justifyContent: "flex-end" }}>160/200</h5>
        <Progress percent={80} showInfo={false} />
        <h5 style={{ display: "flex", justifyContent: "flex-end" }}>310/200</h5>
        <Progress percent={60} showInfo={false} />
        <h5 style={{ display: "flex", justifyContent: "flex-end" }}>480/200</h5>
        <Progress percent={55} showInfo={false} />
        <h5 style={{ display: "flex", justifyContent: "flex-end" }}>250/200</h5>
        <Progress percent={45} showInfo={false} />
      </Col>
    </Row>
  </>
);
function Index2() {
  const [visible, SetVisible] = useState(false);

  const showDrawer = () => {
    SetVisible(true);
  };
  const onClose = () => {
    SetVisible(false);
  };
  return (
    <>
      {" "}
      <nav className="menuBar">
        <div className="menuCon">
          <div className="leftMenu">
            <IndexMenu />
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
            <IndexMenu />
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
                <a href="Home" style={{ color: "gray" }}>
                  Home
                </a>
                <a href="Contact" style={{ color: "gray" }}>
                  Contact
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
              <h1>Dashboard v2</h1>
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
                <Breadcrumb.Item>Dashboard v2</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col md={6} xs={24}>
              <Card>
                <SettingOutlined style={{ fontSize: "150%" }} />
                <h3>CPU Traffic</h3>
                <h3>10%</h3>
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <LikeOutlined style={{ fontSize: "150%" }} />
                <h3>Likes</h3>
                <h3>41,410</h3>
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <ShoppingCartOutlined style={{ fontSize: "150%" }} />

                <h3>Sales</h3>

                <h3>760</h3>
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <UserOutlined style={{ fontSize: "150%" }} />
                <h3>New members</h3>
                <h3>2000</h3>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Monthly Recap Report" key="1" extra="-">
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
export default Index2;
