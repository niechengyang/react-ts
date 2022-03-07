import React from "react";
import styles from "./SideMenu.module.css";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
import { sideMenuList } from "./mockup";

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuList.map((menu, index) => (
        <Menu.SubMenu
          key={`menu-${index}`}
          title={menu.title}
          icon={<GifOutlined />}
        >
          {menu.subMenu.map((subMenu, sbIndex) => (
            <Menu.SubMenu key={`${subMenu.title}-${sbIndex}`} title={subMenu.title}>
              {subMenu.subMenu.map((item, iIndex) => (
                <Menu.Item key={`${item}-${iIndex}`}>{item}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};
