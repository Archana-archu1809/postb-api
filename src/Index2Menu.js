import { Menu, Grid } from "antd";
const { useBreakpoint } = Grid;
const { SubMenu } = Menu;
function IndexMenu() {
  const { md } = useBreakpoint();
  return (
    <>
      <Menu
        mode={md ? "horizontal" : "inline"}
        defaultSelectedKeys={["clearance"]}
      >
        <Menu.Item key="AdminLTE3">AdminLTE3</Menu.Item>
        <Menu.Item key="Alexander Pierece">Alexander Pierece</Menu.Item>
        <SubMenu key="Dashboard" title="Dashboard">
          <Menu.Item key="Dashboard1">Dashboard1</Menu.Item>
          <Menu.Item key="Dashboard2">Dashboard2</Menu.Item>
          <Menu.Item key="Dashboard3">Dashboard3</Menu.Item>
        </SubMenu>
        <Menu.Item key="Widget">Widgets</Menu.Item>
        <SubMenu key="Layout" title=" Layout Options">
          <Menu.Item key="Top">Top Navigation</Menu.Item>
          <Menu.Item key="Topsidebar">Top Navigation+Sidebar</Menu.Item>
          <Menu.Item key="Boxed">Boxed</Menu.Item>
          <Menu.Item key="Fixed">Fixed Sidebar</Menu.Item>
          <Menu.Item key="Fixedsidebar">Fixed Sidebar+Custom Area</Menu.Item>
          <Menu.Item key="FixedNavbar">Fixed Navbar</Menu.Item>
          <Menu.Item key="Fixed Footer">Fixed Footer</Menu.Item>
          <Menu.Item key="Collapsed">Collapsed Sidebar</Menu.Item>
        </SubMenu>
        <SubMenu key="Charts" title=" Charts">
          <Menu.Item key="ChartJs">ChartJS</Menu.Item>
          <Menu.Item key="Flot">Flot</Menu.Item>
          <Menu.Item key="Inline">Inline</Menu.Item>
          <Menu.Item key="Plot">Plot</Menu.Item>
        </SubMenu>
        <SubMenu key="UI Elements" title="UI Elements">
          <Menu.Item key="General">General</Menu.Item>
          <Menu.Item key="Icons">Icons</Menu.Item>
          <Menu.Item key="Buttons">Buttons</Menu.Item>
          <Menu.Item key="Sliders">Sliders</Menu.Item>
          <Menu.Item key="Modals">Modals & alerts</Menu.Item>
          <Menu.Item key="NT">Navbar & Tabs</Menu.Item>
          <Menu.Item key="tl">Timeline</Menu.Item>
          <Menu.Item key="Rb">Ribbons</Menu.Item>
        </SubMenu>
        <SubMenu key="Forms" title="Forms">
          <Menu.Item key="General">General Elements</Menu.Item>
          <Menu.Item key="Advanced ">Advanced Elements</Menu.Item>
          <Menu.Item key="Editors">Editors</Menu.Item>
          <Menu.Item key="Validation">Validation</Menu.Item>
        </SubMenu>
        <SubMenu key="Tables" title="Tables">
          <Menu.Item key="SimpleTable">SimpleTable</Menu.Item>
          <Menu.Item key="Data Tables">Data Tables</Menu.Item>
          <Menu.Item key="JsGrid">JsGrid</Menu.Item>
        </SubMenu>

        <Menu.Item key="Calendar">Calendar</Menu.Item>
        <Menu.Item key="Gallery">Gallery</Menu.Item>
        <Menu.Item key="Kanban Board">Kanban Board</Menu.Item>
        <SubMenu key="Mailbox" title="Mailbox">
          <Menu.Item key="Inbox">Inbox</Menu.Item>
          <Menu.Item key="Compose">Compose</Menu.Item>
          <Menu.Item key="Read">Read</Menu.Item>
        </SubMenu>
        <SubMenu key="Pages" title="Pages">
          <Menu.Item key="Invoices">Invoices</Menu.Item>
          <Menu.Item key="Profile">Profile</Menu.Item>
          <Menu.Item key="E-commerce">E-Commerce</Menu.Item>
          <Menu.Item key="Projects">Projects</Menu.Item>
          <Menu.Item key="Projects Add">Projects Add</Menu.Item>
          <Menu.Item key="Projects Edit">Projects Edit</Menu.Item>
          <Menu.Item key="Projects Details">Project Details</Menu.Item>
          <Menu.Item key="Contacts">Contacts</Menu.Item>
          <Menu.Item key="FAQ">FAQ</Menu.Item>
          <Menu.Item key="Contact us">Contact us</Menu.Item>
        </SubMenu>
        <SubMenu key="Extras" title="Extras">
          <SubMenu key="Login & Register v1" title="Login & Register v1">
            <Menu.Item key="Login v1">Login v1</Menu.Item>
            <Menu.Item key="Register v1">Register v1</Menu.Item>
            <Menu.Item key="Forgot password  v1">Forgot Password v1</Menu.Item>
            <Menu.Item key="Recover Password v1">Recover Password v1</Menu.Item>
          </SubMenu>
          <SubMenu key="Login & Register v2" title="Login & Register v2">
            <Menu.Item key="Login v2">Login v2</Menu.Item>
            <Menu.Item key="Register v2">Register v2</Menu.Item>
            <Menu.Item key="Forgot password  v2">Forgot Password v2</Menu.Item>
            <Menu.Item key="Recover Password v2">Recover Password v2</Menu.Item>
          </SubMenu>
          <Menu.Item key="Lockscreen">LockScreen</Menu.Item>
          <Menu.Item key="Legacy User Menu">Legacy User Menu</Menu.Item>
          <Menu.Item key="Language Menu">Language Menu</Menu.Item>
          <Menu.Item key="Error 404">Error 404</Menu.Item>
          <Menu.Item key="Error 500">Error 500</Menu.Item>
          <Menu.Item key="Pace">Pace</Menu.Item>
          <Menu.Item key="Blank page">Blank Page</Menu.Item>
          <Menu.Item key="Starer Page">Starer Page</Menu.Item>
        </SubMenu>
        <SubMenu key="Search" title="Search">
          <Menu.Item key="Simple Search">Simple Search</Menu.Item>
          <Menu.Item key="Enhanced">Enhanced</Menu.Item>
          <Menu.Item key="Starer Page">Starer Page</Menu.Item>
        </SubMenu>
        <Menu.Item key="Tabbed Iframe Plugins">Tabbed Iframe Plugins</Menu.Item>
        <Menu.Item key="Documentation">Documentation</Menu.Item>
        <Menu.Item key="Level 1">Level 1</Menu.Item>
        <SubMenu key="Level 1" title="Level 1">
          <Menu.Item key="Level 2">Level 2</Menu.Item>
          <SubMenu key="Level2" title="Level 2">
            <Menu.Item key="Level 3">Level 3</Menu.Item>
            <Menu.Item key="Level 3">Level 3</Menu.Item>
            <Menu.Item key="Level 3">Level 3</Menu.Item>
          </SubMenu>
          <Menu.Item key="Level 2">Level 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="Level 1">Level 1</Menu.Item>
        <Menu.Item key="Important">Important</Menu.Item>
        <Menu.Item key="Warning">Warning</Menu.Item>
        <Menu.Item key="Information">Information</Menu.Item>
      </Menu>
    </>
  );
}
export default IndexMenu;
