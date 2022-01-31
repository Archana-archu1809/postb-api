import { Menu, Grid } from "antd";
const { useBreakpoint } = Grid;
const FileMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu
      mode={md ? "horizontal" : "inline"}
      defaultSelectedKeys={["clearance"]}
    >
      <Menu.Item key="Import">Import</Menu.Item>
      <Menu.Item key="Export">Export</Menu.Item>
      <Menu.Item key="Others">Others</Menu.Item>
    </Menu>
  );
};
export default FileMenu;
