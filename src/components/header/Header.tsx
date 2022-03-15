import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import { useSelector } from "../../redux/hooks";
import { logout } from "../../redux/user/slice";
interface JwtPayload extends DefaultJwtPayload {
  username: string;
}
export const Header: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const languageList = useSelector((state) => state.language.languageList);
  const token = useSelector((state) => state.user.token);
  const shoppingCartItems = useSelector((s) => s.shoppingCart.items);
  const shoppingCartLoading = useSelector((s) => s.shoppingCart.loading);
  const dispath = useDispatch();
  const [username, setUsename] = useState("");
  useEffect(() => {
    if (token) {
      setUsename(jwt_decode<JwtPayload>(token).username);
    }
  }, [token]);
  const handleMenuClick = (e) => {
    if (e.key === "new") {
      dispath(addLanguageActionCreator("新语言", "new_language"));
    } else {
      dispath(changeLanguageActionCreator(e.key));
    }
  };
  const onLogout = () => {
    dispath(logout());
    navigate("/");
  };
  return (
    <div className={styles["app-header"]}>
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={handleMenuClick}>
                {languageList.map((l) => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                })}
                <Menu.Item key="new">新语言</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          {token ? (
            <Button.Group className={styles["button-group"]}>
              <span>
                {t("header.welcome")}
                <Typography.Text strong>{username}</Typography.Text>
              </span>
              <Button
                loading={shoppingCartLoading}
                onClick={() => navigate("/shoppingCart")}
              >
                {t("header.shoppingCart")}({shoppingCartItems.length})
              </Button>
              <Button onClick={onLogout}>{t("header.signOut")}</Button>
            </Button.Group>
          ) : (
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => navigate("/register")}>
                {t("header.register")}
              </Button>
              <Button onClick={() => navigate("/signIn")}>
                {t("header.signin")}
              </Button>
            </Button.Group>
          )}
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <img src={logo} alt="" className={styles["App-logo"]}></img>
        <Typography.Title level={3} className={styles.title}>
          {t("header.title")}
        </Typography.Title>
        <Input.Search
          placeholder="请输入旅游目的地、主题或关键词"
          className={styles["search-input"]}
          onSearch={(keywords) => navigate(`/search/${keywords}`)}
        ></Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
};
