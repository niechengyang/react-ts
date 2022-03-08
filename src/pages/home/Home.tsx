import { Row, Col, Typography } from "antd";
import styles from "./Home.module.css";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductionCollection,
} from '../../components';
import { productList1, productList2, productList3 } from "./mockup";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import React from "react";

export const Home: React.FC = () => {
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
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        ></ProductionCollection>
        <ProductionCollection
          title={
            <Typography.Title level={3} type="danger">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        ></ProductionCollection>
        <ProductionCollection
          title={
            <Typography.Title level={3} type="success">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        ></ProductionCollection>
      </div>
      <Footer />
    </>
  );
};
