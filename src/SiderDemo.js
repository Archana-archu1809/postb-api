import React from "react";
import ReactDOM from "react-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Space,
  Button,
  Card,
  Row,
  Col,
  Badge,
  Collapse,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  SearchOutlined,
  WechatOutlined,
  BellOutlined,
  FullscreenOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["Dashboard"]}>
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
          <Header className="site-layout-background" style={{ padding: 15 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            <div
              className="icon"
              style={{
                float: "right",
              }}
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
            </div>
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div className="row">
              <div className="col-6 breadcrumb">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <a href="" style={{ color: "blue" }}>
                      Home
                    </a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className="col-6">
                <h1>OPERATION DASHBOARD</h1>
              </div>
            </div>
            <Row>
              <Col md={24} sm={12} xs={12}>
                <Space>
                  <Button type="primary" ghost>
                    IMPORT
                  </Button>

                  <Button type="primary" ghost>
                    EXPORT
                  </Button>

                  <Button type="primary" ghost>
                    BOND
                  </Button>
                  <Button type="primary" ghost>
                    SEZ
                  </Button>
                </Space>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col md={12} sm={24} xs={24} style={{ paddingRight: 9 }}>
                <Card title="AIR" extra="As on"></Card>
              </Col>

              <Col md={12} sm={24} xs={24}>
                <Card title="AIR" extra="Perfomance"></Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
