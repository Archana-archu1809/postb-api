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
  Typography,
  Divider,
} from "antd";
import LeftMenu from "./leftMenu";
import { useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
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
const { Text } = Typography;
const text1 = (
  <>
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Job Created</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Bill of entry</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Prior</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Normal</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Delayed</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Cleared</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Ontime</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Delayed</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Out of Charge</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>To be cleared</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>1 Day from OOC dt</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          Above 1 Day from OOC dt
        </Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>
          Documents H/O to accounts
        </Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>1 Day from cleared dt</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          Above 1 Day from OOC dt
        </Button>
      </Col>
    </Row>
  </>
);
const text2 = (
  <>
    <CanvasDraw />
  </>
);
const text3 = (
  <>
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Job Created</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Bill of entry</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Prior</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Normal</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Delayed</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Cleared</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Ontime</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>Delayed</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Out of Charge</Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>To be cleared</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>1 Day from OOC dt</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          Above 1 Day from OOC dt
        </Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>
          Documents H/O to accounts
        </Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>1 Day from cleared dt</Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          Above 1 Day from OOC dt
        </Button>
      </Col>
    </Row>
  </>
);
const text4 = (
  <>
    <CanvasDraw />
  </>
);
function DB() {
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
              <h1>Operations Dashboard</h1>
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
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col>
              <Space>
                <Button type="primary">IMPORT</Button>
                <Button>EXPORT</Button>
                <Button>BOND</Button>
                <Button>SEZ</Button>
              </Space>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Air" key="1" extra="As on   -">
                  <h1>{text1}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Air" key="1" extra="  Perfomance   -">
                  <h1>{text2}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Sea" key="1" extra="As on   -">
                  <h1>{text3}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Sea" key="1" extra="  Perfomance -">
                  <h1>{text4}</h1>
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
export default DB;
