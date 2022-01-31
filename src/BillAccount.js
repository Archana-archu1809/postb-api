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
        <label>Search</label>
      </Col>

      <Col>
        <Input />
      </Col>
      <Col>
        <Button>Print voucher</Button>
      </Col>
    </Row>
    <Divider />
    <Space>
      <Row sm={24}>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>

        <Col>
          <h5>Job No</h5>
        </Col>

        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>

        <Col>
          <h5>Data</h5>
        </Col>

        <Col>
          <h5>PIC</h5>
        </Col>
        <Col>
          <h5>Customer</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>PKG</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>G.R weight</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>AWB_BL_No</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>HAWB_No</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>BE_No</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>BE_Date</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>Cleared on</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
        <Col>
          <h5>Delivered on</h5>
        </Col>
        <Col>
          <ArrowUpOutlined />
          <ArrowDownOutlined />
        </Col>
      </Row>
    </Space>
  </>
);
function BillAccount() {
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
        <Content style={{ margin: "20px", height: "550px" }}>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <h1>Bills Handling Over To Accounts</h1>
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
                <Breadcrumb.Item>Bills to Accounts</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={24}>
              <Collapse accordion>
                <Panel
                  header="Bills Handling Over To Accounts Team"
                  key="1"
                  extra="-"
                >
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
export default BillAccount;
