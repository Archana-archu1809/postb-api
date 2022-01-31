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
  Select,
  Input,
  Divider,
  DatePicker,
  Card,
} from "antd";
import Admin from "./Admin";
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

function Starer() {
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
            <Admin />
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
            <Admin />
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
                  Home
                </a>
                <a href="" style={{ color: "gray" }}>
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
              <h1>Starter Page</h1>
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
                <Breadcrumb.Item>Starter Page</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Card title="Card title" style={{ borderRadius: "10px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content
                </p>

                <a href="" style={{ paddingRight: "10px" }}>
                  Card link
                </a>

                <a href="">Another link</a>
              </Card>
            </Col>
            <Col md={12} sm={24}>
              <Card title="Featured" style={{ borderRadius: "10px" }}>
                <p>Special title Treatment</p>
                <p>
                  With supporting text below as a natural lead-in to additional
                  content
                </p>
                <Button type="primary" style={{ borderRadius: "5px" }}>
                  Go somewhere
                </Button>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Card
                title="card title"
                style={{ border: "1px soild blue", borderRadius: "10px" }}
              >
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content
                </p>

                <a href="" style={{ paddingRight: "10px" }}>
                  Card link
                </a>

                <a href="">Another link</a>
              </Card>
            </Col>
            <Col md={12} sm={24}>
              <Card title="Featured" style={{ borderRadius: "10px" }}>
                <p>Special title Treatment</p>
                <p>
                  With supporting text below as a natural lead-in to additional
                  content
                </p>
                <Button type="primary" style={{ borderRadius: "5px" }}>
                  Go somewhere
                </Button>
              </Card>
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
                  AdminLTE.io
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
              <Space>Anything you want</Space>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
}
export default Starer;
