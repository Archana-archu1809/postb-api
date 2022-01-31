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
const { Option } = Select;
const { RangePicker } = DatePicker;
const text1 = (
  <>
    <Row style={{ display: "flex" }}>
      <Col md={8} lg={6} sm={24}>
        <label>No Type:</label>
        <Select placeholder="Select" style={{ width: 340 }}>
          <Option>Job No</Option>
          <Option>BE No</Option>
          <Option>IGM No</Option>
          <Option>AWB NO</Option>
          <Option>HAWB No</Option>
        </Select>
      </Col>

      <Col md={8} lg={6} sm={12}>
        <label>No:</label>
        <Input />
      </Col>

      <Col md={8} lg={6}>
        <label>Date</label>
        <Select placeholder="Select" style={{ width: 340 }}>
          <Option>Job Date</Option>
          <Option>BE Date</Option>
          <Option>IGM Date</Option>
          <Option>AWB Date</Option>
          <Option>HAWB Date</Option>
        </Select>
      </Col>
      <Col md={8} lg={6}>
        <label>Date Range</label>
        <RangePicker />
      </Col>
      <Col md={8} lg={6}>
        <label>Mode</label>
        <Select placeholder="Select" style={{ width: 340 }}>
          <Option>Job Date</Option>
          <Option>BE Date</Option>
          <Option>IGM Date</Option>
          <Option>AWB Date</Option>
          <Option>HAWB Date</Option>
        </Select>
      </Col>
      <Col md={8}>
        <label>Import Type</label>
        <Input />
      </Col>
      <Col md={8}>
        <label>Customer No</label>
        <Input />
      </Col>
      <Col md={8}>
        <label></label>
        <Button type="primary" style={{ width: 340 }}>
          Search
        </Button>
      </Col>
    </Row>
  </>
);
const text2 = (
  <Row>
    <Col md={6}>
      <h5>Job No</h5>
    </Col>
    <Col md={6}>
      <h5>Job Date</h5>
    </Col>

    <Col md={6}>
      <h5>Owner</h5>
    </Col>

    <Col md={6}>
      <h5>Importer</h5>
    </Col>

    <Col md={6}>
      <h5>Mode</h5>
    </Col>

    <Col md={6}>
      <h5>IGM Date</h5>
    </Col>

    <Col md={6}>
      <h5>BE No</h5>
    </Col>

    <Col md={6}>
      {" "}
      <h5>BE Date</h5>
    </Col>

    <Col md={6}>
      {" "}
      <h5> No of pkgs</h5>
    </Col>

    <Col md={6}>
      {" "}
      <h5>Unit</h5>
    </Col>

    <Col md={6}>
      {" "}
      <h5>G.Weight</h5>
    </Col>

    <Col md={6}>
      {" "}
      <h5>Unit</h5>
    </Col>
    <Col md={6}>
      <h5>AWB No</h5>
    </Col>
    <Col md={6}>
      <h5>AWB Date</h5>
    </Col>
    <Col md={6}>
      <h5>HAWB No</h5>
    </Col>
    <Col md={6}>
      <h5>HAWB Date</h5>
    </Col>
    <Col md={6}>
      <h5>IGM No</h5>
    </Col>
    <Col md={6}>
      <h5>Container Count</h5>
    </Col>
    <Col md={6}>
      <h5>OOC</h5>
    </Col>
    <Col md={6}>
      <h5>Cleared On</h5>
    </Col>
    <Col md={6}>
      <h5>Delivery</h5>
    </Col>
    <Col md={6}>
      <h5>Doc to A/C</h5>
    </Col>
    <Col md={6}>
      <h5>Doc by A/C</h5>
    </Col>
    <Col md={6}>
      <h5>Assbl value</h5>
    </Col>
    <Col md={6}>
      <h5>InBond BE No</h5>
    </Col>
    <Col md={6}>
      <h5>InBond BE Date</h5>
    </Col>
    <Col md={6}>
      <h5>No of Container</h5>
    </Col>
    <Col md={6}>
      <h5>Payment received</h5>
    </Col>
    <Col md={6}>
      <h5>Bonded On</h5>
    </Col>
    <Col md={6}>
      <h5>Billed On</h5>
    </Col>
    <Col md={6}>
      <h5>POsted On</h5>
    </Col>
  </Row>
);
function Search() {
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
        <Content style={{ margin: "30px", height: "800px" }}>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <h1>Search</h1>
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
                <Breadcrumb.Item>Search</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={24}>
              <Collapse accordion defaultActivateKey={["1"]}>
                <Panel header="Search-Imports" key="1" extra="-">
                  <h1>{text1}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={24}>
              <Collapse accordion>
                <Panel header="Import Report Card" extra="-">
                  <h1>{text2}</h1>
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
export default Search;
