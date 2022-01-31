import { Menu, Grid } from "antd";
const { useBreakpoint } = Grid;
const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu
      mode={md ? "horizontal" : "inline"}
      defaultSelectedKeys={["clearance"]}
    >
      <Menu.Item key="Smart">Smart Solution</Menu.Item>
      <Menu.Item key="Dashboard">MIS dashboard</Menu.Item>
      <Menu.Item key="operation">Operations</Menu.Item>
      <Menu.Item key="Exception">Exceptions</Menu.Item>
      <Menu.Item key="Account">Accounting</Menu.Item>
      <Menu.Item key="Management">Management</Menu.Item>
      <Menu.Item key="Alert">Alert</Menu.Item>
      <Menu.Item key="cleared">To be Cleared</Menu.Item>
      <Menu.Item key="clearance">Clearance Status</Menu.Item>
      <Menu.Item key="bills">Bills To Accounts</Menu.Item>
      <Menu.Item key="search">Search</Menu.Item>
      <Menu.Item key="upload">Upload</Menu.Item>
      <Menu.Item key="system">System setting</Menu.Item>
      <Menu.Item key="delay clearance">Clearance Delay-codes</Menu.Item>
      <Menu.Item key="delivery delay">Delivery Delay-codes</Menu.Item>
    </Menu>
  );
};
export default LeftMenu;
