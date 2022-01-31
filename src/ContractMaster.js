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
  Form,
  InputNumber,
  Card,
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
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { StepPanel } from "./StepPanel";
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;
function Contract() {
  const [visible, SetVisible] = useState(false);
  const [stepForm] = Form.useForm();
  const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 8 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 12 },
      lg: { span: 12 },
    },
  };
  const Step1Form = () => {
    return (
      <Card
        style={{
          border: "1px soild black",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      >
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Description" label="Description">
              <Input placeholder="Enter a description" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Option">
              <Select>
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Unit">
              <Select>
                <Select.Option value="BE">BE</Select.Option>
                <Select.Option value="SB">SB</Select.Option>
                <Select.Option value="CIF">CIF</Select.Option>
                <Select.Option value="Container">Container</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item label="Arithmatic">
              <Select>
                <Select.Option value="+">+</Select.Option>
                <Select.Option value="*">*</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range" label="Range">
              <Input placeholder="Enter a Range" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Min" label="Min">
              <InputNumber placeholder="Enter a Min" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Max" label="Max">
              <InputNumber placeholder="Enter a Max" size="large" />
            </Form.Item>
          </Col>{" "}
          <Col xs={24} xl={8}>
            <Form.Item name="Less than" label="Less than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range1" label="Range1">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Range2" label="Range2">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range3" label="Range3">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Greater than" label="Greater than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    );
  };
  const Step2Form = () => {
    return (
      <Card
        style={{
          border: "1px soild black",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      >
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Description" label="Description">
              <Input placeholder="Enter a description" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Option">
              <Select>
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Unit">
              <Select>
                <Select.Option value="BE">BE</Select.Option>
                <Select.Option value="SB">SB</Select.Option>
                <Select.Option value="CIF">CIF</Select.Option>
                <Select.Option value="Container">Container</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item label="Arithmatic">
              <Select>
                <Select.Option value="+">+</Select.Option>
                <Select.Option value="*">*</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range" label="Range">
              <Input placeholder="Enter a Range" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Min" label="Min">
              <InputNumber placeholder="Enter a Min" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Max" label="Max">
              <InputNumber placeholder="Enter a Max" size="large" />
            </Form.Item>
          </Col>{" "}
          <Col xs={24} xl={8}>
            <Form.Item name="Less than" label="Less than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range1" label="Range1">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Range2" label="Range2">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range3" label="Range3">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Greater than" label="Greater than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    );
  };
  const Step3Form = () => {
    return (
      <Card
        style={{
          border: "1px soild black",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      >
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Description" label="Description">
              <Input placeholder="Enter a description" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Option">
              <Select>
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Unit">
              <Select>
                <Select.Option value="BE">BE</Select.Option>
                <Select.Option value="SB">SB</Select.Option>
                <Select.Option value="CIF">CIF</Select.Option>
                <Select.Option value="Container">Container</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item label="Arithmatic">
              <Select>
                <Select.Option value="+">+</Select.Option>
                <Select.Option value="*">*</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range" label="Range">
              <Input placeholder="Enter a Range" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Min" label="Min">
              <InputNumber placeholder="Enter a Min" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Max" label="Max">
              <InputNumber placeholder="Enter a Max" size="large" />
            </Form.Item>
          </Col>{" "}
          <Col xs={24} xl={8}>
            <Form.Item name="Less than" label="Less than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range1" label="Range1">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Range2" label="Range2">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range3" label="Range3">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Greater than" label="Greater than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    );
  };
  const Step4Form = () => {
    return (
      <Card
        style={{
          border: "1px soild black",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      >
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Description" label="Description">
              <Input placeholder="Enter a description" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Option">
              <Select>
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item label="Unit">
              <Select>
                <Select.Option value="BE">BE</Select.Option>
                <Select.Option value="SB">SB</Select.Option>
                <Select.Option value="CIF">CIF</Select.Option>
                <Select.Option value="Container">Container</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item label="Arithmatic">
              <Select>
                <Select.Option value="+">+</Select.Option>
                <Select.Option value="*">*</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range" label="Range">
              <Input placeholder="Enter a Range" />
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Min" label="Min">
              <InputNumber placeholder="Enter a Min" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Max" label="Max">
              <InputNumber placeholder="Enter a Max" size="large" />
            </Form.Item>
          </Col>{" "}
          <Col xs={24} xl={8}>
            <Form.Item name="Less than" label="Less than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range1" label="Range1">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col xs={24} xl={8}>
            <Form.Item name="Range2" label="Range2">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Range3" label="Range3">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} xl={8}>
            <Form.Item name="Greater than" label="Greater than">
              <div className="flex" style={{ display: "flex" }}>
                <Input placeholder="data" />
                <Input placeholder="value" />
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    );
  };
  const Step5Form = () => {
    return (
      <Form {...layout}>
        <div className="Field1" style={{ marginTop: "50px" }}>
          <Form.Item name="Description" label="Description">
            <Input placeholder="Enter a description" />
          </Form.Item>

          <Form.Item label="Option">
            <Select>
              <Select.Option value="Yes">Yes</Select.Option>
              <Select.Option value="No">No</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Unit">
            <Select>
              <Select.Option value="BE">BE</Select.Option>
              <Select.Option value="SB">SB</Select.Option>
              <Select.Option value="CIF">CIF</Select.Option>
              <Select.Option value="Container">Container</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Arithmatic">
            <Select>
              <Select.Option value="+">+</Select.Option>
              <Select.Option value="*">*</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="Range" label="Range">
            <Input placeholder="Enter a Range" />
          </Form.Item>

          <Form.Item name="Min" label="Min">
            <InputNumber placeholder="Enter a Min" />
          </Form.Item>

          <Form.Item name="Max" label="Max">
            <InputNumber placeholder="Enter a Max" />
          </Form.Item>

          <Form.Item name="Less than" label="Less than">
            <div className="flex" style={{ display: "flex" }}>
              <Input />
              <Input />
            </div>
          </Form.Item>

          <Form.Item name="Range1" label="Range1">
            <div className="flex" style={{ display: "flex" }}>
              <Input />
              <Input />
            </div>
          </Form.Item>

          <Form.Item name="Range2" label="Range2">
            <div className="flex" style={{ display: "flex" }}>
              <Input />
              <Input />
            </div>
          </Form.Item>

          <Form.Item name="Range3" label="Range3">
            <div className="flex" style={{ display: "flex" }}>
              <Input />
              <Input />
            </div>
          </Form.Item>

          <Form.Item name="Greater than" label="Greater than">
            <div className="flex" style={{ display: "flex" }}>
              <Input />
              <Input />
            </div>
          </Form.Item>
        </div>
      </Form>
    );
  };
  const onFinish = (fieldsValue) => {
    const formData = stepForm.getFieldsValue();

    console.log(formData);
  };
  const steps = [
    {
      title: "Service Charge",
      content: <Step1Form />,
    },
    {
      title: "Handling Charges",
      content: <Step2Form />,
    },
    {
      title: "Specific Charge",
      content: <Step3Form />,
    },
    {
      title: "Reimbursibles",
      content: <Step4Form />,
    },
    {
      title: "Transportation Charge",
      content: <Step5Form />,
    },
  ];

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
          <h1>Contract Master</h1>
          <Row gutter={8}>
            <Col xl={8} xs={24}>
              <Form.Item name="Customer Name" label="Customer Name">
                <Input placeholder="Enter a customer name" />
              </Form.Item>
            </Col>
            <Col xl={8} xs={24}>
              <Form.Item name="Code" label="Code">
                <Input placeholder="Enter a Code" />
              </Form.Item>
            </Col>
            <Col xl={8} xs={24}>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="Air">Air Import</Select.Option>
                  <Select.Option value="Sea">Sea Import</Select.Option>
                  <Select.Option value="AirExport">Air Export</Select.Option>
                  <Select.Option value="SeaExport">Sea Export</Select.Option>
                  <Select.Option value="IN">In Bond</Select.Option>
                  <Select.Option value="Ex">Ex Bond</Select.Option>
                  <Select.Option value="SEZ">Sez Clearance</Select.Option>
                  <Select.Option value="DTA">DTA Clearance</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form form={stepForm} onFinish={onFinish}>
            <StepPanel steps={steps} />
          </Form>
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
export default Contract;
