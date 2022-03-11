import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { Row, Col, Typography, Spin } from "antd";
import styles from "./Home.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductionCollection,
} from "../../components";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import { fetchProductDataCreator } from "../../redux/recommendProducts/recommengProductsActions";
export const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispath = useDispatch();
  const productList = useSelector(
    (state) => state.recommendProducts.productList
  );
  const loading = useSelector((state) => state.recommendProducts.loading);
  const error = useSelector((state) => state.recommendProducts.error);
  useEffect(() => {
    dispath(fetchProductDataCreator());
  }, []);
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <Typography.Text>{error}</Typography.Text>;
  }
  return (
    <>
      <Header />
      <div className={styles["App-content"]}>
        <Row style={{ marginTop: 10 }}>
          <Col span={6}>
            <SideMenu></SideMenu>
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductionCollection
          title={
            <Typography.Title level={3} type="warning">
              {t("home_page.hot_recommended")}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList[0].touristRoutes}
        ></ProductionCollection>
        <ProductionCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        ></ProductionCollection>
        <ProductionCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        ></ProductionCollection>
      </div>
      <Footer />
    </>
  );
};
