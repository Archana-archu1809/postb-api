import { Menu, Grid } from "antd";
const { useBreakpoint } = Grid;
const Admin = () => {
  const { md } = useBreakpoint();
  return (
    <>
      <Menu
        mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={["clearance"]}
      >
        <Menu.Item key="AdminLTE">AdminLTE</Menu.Item>
        <Menu.Item key="Alexander Pierce">Alexander Pierce</Menu.Item>
        <Menu.Item key="Starer Page">Starer Page</Menu.Item>
        <Menu.Item key="Active Page">Active Page</Menu.Item>
        <Menu.Item key="InActive Page">InActive Page</Menu.Item>
        <Menu.Item key="Simple Link">Simple Link</Menu.Item>
      </Menu>
    </>
  );
};
export default Admin;
