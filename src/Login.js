import { Row, Col, Form, Input, Button, Checkbox, Space } from "antd";

function Login() {
  return (
    <Form name="basic">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Col span={4}>
          Login
          <Form.Item>
            <Input placeholder="Enter a username here" />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="Enter a password here" />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="login">Forget password</a>
          <br />
          <Button type="primary">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}
export default Login;
