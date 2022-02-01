import { Row, Col, Form, Input, Button, Checkbox, Space } from "antd";

function Login() {
  return (
    <Form name="basic">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "70vh" }}
      >
        <Col span={4}>
          <h1 style={{ textAlign: "center" }}> LOGIN</h1>
          <Form.Item>
            <Input
              placeholder="Enter a username here"
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              placeholder="Enter a password here"
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>

          <br />
          <Button type="primary" style={{ borderRadius: "10px" }}>
            Submit
          </Button>
          <Form.Item>
            <Checkbox style={{ textAlign: "center" }}>Remember me</Checkbox>
          </Form.Item>
          <a href="login" style={{ textAlign: "center" }}>
            Forget password
          </a>
        </Col>
      </Row>
    </Form>
  );
}
export default Login;
