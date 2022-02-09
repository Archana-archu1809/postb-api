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
  Divider,
  Image,
  Statistic,
  Table,
  Tag,
} from "antd";

import { useState } from "react";

import {
  SearchOutlined,
  WechatOutlined,
  BellOutlined,
  FullscreenOutlined,
  PoweroffOutlined,
  CopyrightOutlined,
  MenuUnfoldOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  SettingOutlined,
  LikeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CloudDownloadOutlined,
  HeartOutlined,
  MessageOutlined,
  ArrowLeftOutlined,
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
      <Col md={12}></Col>
      <Col md={12} sm={24}>
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
    <Row gutter={6}>
      <Col
        md={4}
        offset={1}
        sm={24}
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <h5> 17% </h5>
        <h5>$35,210.43</h5>
        <h5>Total Revenue</h5>
      </Col>
      <Col md={1} style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Divider
          type="vertical"
          style={{ height: "100px", backgroundColor: "#000" }}
        />
      </Col>

      <Col
        md={4}
        offset={1}
        sm={24}
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <h5>0%</h5>
        <h5>$10,39 0.90</h5>
        <h5>TOTAL COST</h5>
      </Col>
      <Col md={1} style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Divider
          type="vertical"
          style={{ height: "100px", backgroundColor: "#000" }}
        />
      </Col>
      <Col
        md={4}
        offset={1}
        sm={24}
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <h5>20%</h5>
        <h5>24,813.53</h5>
        <h5>TOTAL PROFIT</h5>
      </Col>
      <Col md={1} style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Divider
          type="vertical"
          style={{ height: "100px", backgroundColor: "#000" }}
        />
      </Col>
      <Col md={4} sm={24} style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <h5>18%</h5>
        <h5>1,200</h5>
        <h5>GOAL COMPLETION</h5>
      </Col>
    </Row>
  </>
);
const text2 = (
  <>
    <Row style={{ height: "150px", overflow: "auto" }}>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <h5>Alexander Pierce</h5>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5 style={{ color: "gray" }}> 23 Jan 2:00pm</h5>
      </Col>
      <Col md={5}>
        {" "}
        <Image
          width={50}
          style={{ borderRadius: "50%" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col md={19}>
        <h5>Is this template really for free?That's unbelivable!</h5>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <h5 style={{ color: "gray" }}> 23 Jan 2:05pm</h5>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5 style={{ color: "white" }}>Sarah Bullock</h5>
      </Col>

      <Col md={19}>
        <h5>You better believe it!</h5>
      </Col>
      <Col md={5}>
        <Image
          width={50}
          style={{ borderRadius: "50%" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <h5>Alexander Pierce</h5>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5 style={{ color: "gray" }}> 23 Jan 2:00pm</h5>
      </Col>
      <Col md={5}>
        <Image
          width={50}
          style={{ borderRadius: "50%" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col md={19}>
        <h5>Working with AdminLTE on a great new app! wanna join?</h5>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <h5 style={{ color: "gray" }}> 23 Jan 2:05pm</h5>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5>Sarah Bullock</h5>
      </Col>

      <Col md={19}>
        <h5>I would love to!</h5>
      </Col>
      <Col md={5}>
        {" "}
        <Image
          width={50}
          style={{ borderRadius: "50%" }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
    </Row>
  </>
);
const text3 = (
  <>
    <Row
      style={{
        overflow: "hidden",
      }}
    >
      <Space>
        <Col sm={24}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Alexander Pierce
          </a>
          <h5>Today</h5>
        </Col>
        <Col sm={24}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Norman
          </a>
          <h5>Yesterday</h5>
        </Col>

        <Col sm={24} style={{ textOverflow: "ellipsis" }}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Jane
          </a>
          <h5>12 Jan</h5>
        </Col>

        <Col sm={24} style={{ textoverflow: "ellipsis" }}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            John
          </a>
          <h5>12 Jan</h5>
        </Col>
      </Space>
    </Row>

    <Row style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
      <Space>
        <Col sm={24}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Alexander
          </a>
          <h5>13 Jan</h5>
        </Col>
        <Col sm={24}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Sarah
          </a>
          <h5>14 Jan</h5>
        </Col>

        <Col sm={24}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Nora
          </a>
          <h5>15 Jan</h5>
        </Col>

        <Col sm={24}>
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <a href="index2" style={{ display: "flex", flexDirection: "Column" }}>
            Nadia
          </a>
          <h5>15 Jan</h5>
        </Col>
      </Space>
    </Row>
    <Row>
      <Col md={24} style={{ display: "flex", justifyContent: "center" }}>
        <Button type="link">View All Users</Button>
      </Col>
    </Row>
  </>
);

const text4 = (
  <>
    <Row>
      <Col
        md={19}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">United States of America</a>
      </Col>
      <Col
        md={5}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5 style={{ color: "pink" }}>
          <ArrowDownOutlined style={{ fontSize: "150%" }} />
          12%
        </h5>
      </Col>
      <Divider />
      <Col
        md={19}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">India</a>
      </Col>
      <Col
        md={5}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5 style={{ color: "pink" }}>
          <ArrowUpOutlined style={{ fontSize: "150%" }} />
          4%
        </h5>
      </Col>
      <Divider />
      <Col
        md={19}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">China</a>
      </Col>
      <Col
        md={5}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <h5 style={{ color: "pink" }}>
          <ArrowLeftOutlined style={{ fontSize: "150%" }} />
          0%
        </h5>
      </Col>
      <Divider />
    </Row>
  </>
);
const columns = [
  {
    title: "OrderID",
    dataIndex: "OrderID",
    key: "OrderID",
    render: (text) => <a>{text}</a>,
  },
  { title: "Item", dataIndex: "Item", key: "Item" },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    render: (Status) => <Tag>{Status}</Tag>,
  },
  { title: "Popularity", dataIndex: "Popularity", key: "Popularity" },
];
const dataSource = [
  {
    key: "1",
    OrderID: "OR9842",
    Item: "Call of Duty IV",
    Status: ["Shipped"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
  {
    key: "2",
    OrderID: "ORI848",
    Item: "Samsung Smart Tv",
    Status: ["Pending"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
  {
    key: "3",
    OrderID: "OR7429",
    Item: "Iphone 6 Plus",
    Status: ["Delivered"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
  {
    key: "4",
    OrderID: "OR7429",
    Item: "Samsung Smart Tv",
    Status: ["Processing"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
  {
    key: "5",
    OrderID: "OR1848",
    Item: "Samsung Smart Tv",
    Status: ["Pending"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
  {
    key: "6",
    OrderID: "OR7429",
    Item: "Iphone 6 plus",
    Status: ["Delivered"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
  {
    key: "7",
    OrderID: "OR9842",
    Item: "Call of Duty IV",
    Status: ["Shipped"],
    Popularity: "90,80,90,-70,61,-83,63",
  },
];
const text5 = (
  <>
    <Table dataSource={dataSource} columns={columns} />
    <Row>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <Button type="primary">Place New Order</Button>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button type="primary">View All Orders</Button>
      </Col>
    </Row>
  </>
);
const text6 = (
  <>
    <Row>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">Samsung TV</a>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Tag color="yellow">$1800</Tag>
      </Col>
      <Col>
        <h5>Samsung 32" 1080p 60HzLED Smart HDTV</h5>
        <Divider />
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">Bicycle</a>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Tag color="blue">$700</Tag>
      </Col>
      <Col>
        <h5>26" Mongoose Dolomite Men's7 speed ,Navy</h5>
        <Divider />
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">Xbox One</a>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Tag color="red">$350</Tag>
      </Col>
      <Col>
        <h5>Xbox One Console Bundle with Halo Master</h5>
        <Divider />
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="">Playstation 4</a>
      </Col>
      <Col
        md={12}
        sm={24}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Tag color="green">$399</Tag>
      </Col>
      <Col>
        <h5>Playstation 4 500GB console(PS4) </h5>
        <Divider />
      </Col>
    </Row>
    <Row>
      <Col md={24} style={{ display: "flex", justifyContent: "center" }}>
        <Button type="link">View all Products</Button>
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

                <Statistic title="Likes" value={41410} />
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <ShoppingCartOutlined style={{ fontSize: "150%" }} />

                <Statistic title="Sales" value={760} />
              </Card>
            </Col>
            <Col md={6} xs={24}>
              <Card>
                <UserOutlined style={{ fontSize: "150%" }} />

                <Statistic title="New Members" value={2000} />
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
          <Row>
            <Col md={16}></Col>
            <Col md={8} sm={24}>
              <Card style={{ backgroundColor: "yellow" }}>
                <h5>Inventory</h5>
                <h5>
                  <b>5,200</b>
                </h5>
              </Card>
              <Card style={{ backgroundColor: "lightgreen" }}>
                <HeartOutlined style={{ fontSize: "150%" }} />
                <h5>Mentions</h5>
                <h5>
                  <b>92,050</b>
                </h5>
              </Card>
              <Card style={{ backgroundColor: "lightred" }}>
                <CloudDownloadOutlined style={{ fontSize: "150%" }} />
                <h5>Downloads</h5>
                <h5>
                  <b>1,14,381</b>
                </h5>
              </Card>
              <Card style={{ backgroundColor: "lightblue" }}>
                <MessageOutlined style={{ fontSize: "150%" }} />
                <h5>Direct messages</h5>
                <h5>
                  <b>1,63,921</b>
                </h5>
              </Card>
            </Col>
          </Row>
          <Row gutter={8} style={{ marginTop: 30, marginBottom: 30 }}>
            <Col md={8} sm={24}>
              <Collapse accordion defaultActivateKey={["2"]}>
                <Panel header="Direct Chat" key="2" extra="-">
                  <h1>{text2}</h1>
                </Panel>
              </Collapse>
            </Col>
            <Col md={8} sm={24} style={{ overflow: "unset" }}>
              <Collapse accordion defaultActivateKey={["3"]}>
                <Panel header="Latest members" key="3" extra="-">
                  <h1>{text3}</h1>
                </Panel>
              </Collapse>
            </Col>
            <Col md={8} sm={24}>
              <Collapse accordion defaultActivateKey={["4"]}>
                <Panel header="Browser Usage" key="4" extra="-">
                  <h1>{text4}</h1>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Col md={16} sm={24}>
              <Collapse accordion defaultActivateKey={["5"]}>
                <Panel header="Latest orders" key="5" extra="-">
                  <h1>{text5}</h1>
                </Panel>
              </Collapse>
            </Col>
            <Col md={8} sm={24}>
              <Collapse accordion defaultActivateKey={["6"]}>
                <Panel header="Recently Added Products" key="6" extra="-">
                  <h1>{text6}</h1>
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
                  AdminLTE.io.
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
