import React from "react";
import { Layout as DefaultLayout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import classes from "./index.module.css";

const { Header, Content } = DefaultLayout;

const Layout = () => {
  return (
    <div className={classes.container}>
      <DefaultLayout className={classes.layout}>
        <Header className={classes.header}>
          <img className={classes.logo} src="src/assets/react.svg" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: "0 24px" }}>
          <Outlet />
          12313
        </Content>
      </DefaultLayout>
    </div>
  );
};

export default Layout;
