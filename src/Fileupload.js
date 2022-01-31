import { Drawer, Button, Layout, Row, Col, Upload, message, Card } from "antd";
import FileMenu from "./FileuploadMenu";
import { useState } from "react";

import {
  MenuUnfoldOutlined,
  CloudUploadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function FileUpload() {
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
            <FileMenu />
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
            <FileMenu />
          </Drawer>
        </div>
      </nav>
      <Layout>
        <Content style={{ margin: 30 }}>
          <Row>
            <Col sm={24}>
              <h1>A1 & S1 imports</h1>
            </Col>
          </Row>
          <Card style={{ width: 500 }}>
            <Row style={{ width: 500, border: "1px soild black" }}>
              <Col md={5}>
                <CloudUploadOutlined style={{ width: 100 }} />
              </Col>
              <Col>
                <h2>Drag and Drop</h2>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                  <Button>No file Choosen</Button>
                </Upload>
              </Col>
            </Row>
          </Card>

          <Row>
            <Col md={5} sm={24}>
              <a href="">download template</a>
            </Col>
          </Row>
          <Row style={{ marginTop: 10, marginBottom: 10, padding: "10px" }}>
            <Col>
              <Button type="success">Submit</Button>
            </Col>
            <Col>
              <Button type="danger">Cancel</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={24}>
              <h1>A2 & S2 imports</h1>
            </Col>
          </Row>
          <Card style={{ width: 500 }}>
            <Row style={{ width: 500, border: "1px soild black" }}>
              <Col md={5}>
                <CloudUploadOutlined style={{ width: 100 }} />
              </Col>
              <Col>
                <h2>Drag and Drop</h2>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                  <Button>No file choosen</Button>
                </Upload>
              </Col>
            </Row>
          </Card>

          <Row>
            <Col sm={24}>
              <a href="">download template</a>
            </Col>
          </Row>
          <Row style={{ marginTop: 10, marginBottom: 10, padding: "10px" }}>
            <Col>
              <Button type="success">Submit</Button>
            </Col>
            <Col>
              <Button type="danger">Cancel</Button>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}
export default FileUpload;
