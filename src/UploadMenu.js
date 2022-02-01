import { Menu, Grid } from "antd";
const { useBreakpoint } = Grid;
function UploadMenu() {
  const { md } = useBreakpoint();
  return (
    <>
      <Menu
        mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={["upload"]}
      >
        <Menu.Item key="Smart">Smart Solution</Menu.Item>
        <Menu.Item key="Dashboard">MIS dashboard</Menu.Item>
        <Menu.Item key="operation">Operations</Menu.Item>
        <Menu.Item key="Exception">Exceptions</Menu.Item>
        <Menu.Item key="Account">Accounting</Menu.Item>
        <Menu.Item key="Management">Management</Menu.Item>
        <Menu.Item key="Alert">Alert</Menu.Item>
        <Menu.Item key="upload">Upload</Menu.Item>
      </Menu>
    </>
  );
}
export default UploadMenu;
