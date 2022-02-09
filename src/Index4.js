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
  MenuUnfoldOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
const text1 = (
  <>
    {" "}
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>on Time HO</h5>
      </Col>
    </Row>
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>
          Warning
          <Badge count={39}></Badge>
        </Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>
          Billed <Badge count={16}></Badge>
        </Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          To bill 2 days <Badge count={5}></Badge>
        </Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          To bill 2 days <Badge count={8}></Badge>
        </Button>
      </Col>
    </Row>
    <Divider />
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>
          Dispatched <Badge count={16}></Badge>
        </Button>
      </Col>
    </Row>
    <Row>
      <Col span={18} offset={6}>
        <Button style={{ borderRadius: "10px" }}>
          To Dispatch 2 days <Badge count={9}></Badge>
        </Button>
      </Col>
    </Row>
  </>
);
const text2 = <></>;
const text3 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>on Time Billing</h5>
      </Col>
    </Row>
  </>
);
const text4 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>on Time Dispatch</h5>
      </Col>
    </Row>
  </>
);
const text5 = (
  <>
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Billed</Button>
      </Col>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Collected?</Button>
      </Col>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Short Received</Button>
      </Col>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Short Recovered</Button>
      </Col>
    </Row>
  </>
);
const text6 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>To Collect</h5>
      </Col>
    </Row>
  </>
);
const text7 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>Short paid to recover</h5>
      </Col>
    </Row>
  </>
);
const text8 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>Shortage-recover from</h5>
      </Col>
    </Row>
  </>
);
const text9 = (
  <>
    <Row>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Transporters</Button>
      </Col>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Ware house??</Button>
      </Col>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Focus Vendors??</Button>
      </Col>
      <Col md={24}>
        <Button style={{ borderRadius: "10px" }}>Any Category??</Button>
      </Col>
    </Row>
  </>
);
const text10 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>Outstanding to transporters</h5>
      </Col>
    </Row>
  </>
);
const text11 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>Outstanding to Ware House</h5>
      </Col>
    </Row>
  </>
);
const text12 = (
  <>
    <Row>
      <Col md={12}></Col>
      <Col
        md={12}
        style={{ display: "flex", justifyContent: "flex-end", color: "blue" }}
      >
        <h5>Outstanding to focus vendors</h5>
      </Col>
    </Row>
  </>
);
const text13 = <></>;
function Index4() {
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
              <h1>Accounting</h1>
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
                <Breadcrumb.Item>Accounting</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Billing" key="1" extra="As on 2022/02/07  -">
                  <h1>{text1}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Billing" key="1" extra="  Perfomance -">
                  <h1>{text2}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Billing" key="1" extra="As on 2022/02/07  -">
                  <h1>{text3}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Billing" key="1" extra="  Perfomance -">
                  <h1>{text4}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Collection" key="1" extra="As on 2022/02/07  -">
                  <h1>{text5}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Collection" key="1" extra="  Perfomance -">
                  <h1>{text6}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Collection" key="1" extra="As on 2022/02/07  -">
                  <h1>{text7}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Collection" key="1" extra="  Perfomance -">
                  <h1>{text8}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Payments" key="1" extra="As on 2022/02/07  -">
                  <h1>{text9}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Payments" key="1" extra="  Perfomance -">
                  <h1>{text10}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Payments" key="1" extra="As on 2022/02/07  -">
                  <h1>{text11}</h1>
                </Panel>
              </Collapse>
            </Col>

            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Payments" key="1" extra="  Perfomance -">
                  <h1>{text12}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={12} sm={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel
                  header="Stacked Bar Chart"
                  key="1"
                  extra="As on 2022/02/07  -"
                >
                  <h1>{text13}</h1>
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
export default Index4;
