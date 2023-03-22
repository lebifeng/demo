import React, { useState } from "react";
import { Layout as DefaultLayout, Menu } from "antd";
import { Outlet, useNavigate, useMatches } from "react-router-dom";
import classes from "./index.module.css";

const { Header, Content } = DefaultLayout;

const Layout = (props) => {
  const { menus = [] } = props;
  const [activeKey, setActiveKey] = useState("");
  const navigate = useNavigate();
  const navigation = useMatches();
  console.log("navigation", navigation);

  const onClick = ({ key }) => {
    setActiveKey(key);
    navigate(key);
  };

  return (
    <div className={classes.container}>
      <DefaultLayout className={classes.layout}>
        <Header className={classes.header}>
          <img className={classes.logo} src="src/assets/react.svg" />
          <Menu
            theme="dark"
            items={menus}
            mode="horizontal"
            className={classes.menu}
            selectedKeys={[activeKey]}
            onSelect={onClick}
          />
        </Header>
        <Content style={{ padding: "0 24px" }}>
          <Outlet />
        </Content>
      </DefaultLayout>
    </div>
  );
};

export default Layout;
