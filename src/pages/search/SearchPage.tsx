import styles from "./SearchPage.module.css";
import { Spin } from "antd";
import React, { useEffect } from "react";
import { Header, Footer, FilterArea, ProductList } from "../../components";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { searchProduct } from "../../redux/productSearch/slice";
export const SearchPage: React.FC = () => {
  const { keywords } = useParams();
  const location = useLocation();
  const loading = useSelector((state) => state.productSearch.loading);
  const error = useSelector((state) => state.productSearch.error);
  const productList = useSelector((state) => state.productSearch.data);
  const pagination = useSelector((state) => state.productSearch.pagination);
  console.log(productList, pagination)
  const dispath = useDispatch();
  const onPageChange = (nextPage, pageSize) => {
    dispath(searchProduct({ nextPage, pageSize, keywords }));
  };
  useEffect(() => {
    dispath(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
  }, [location]);
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
    return <div>网站出错：{error}</div>;
  }
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        {/* 分类过滤器 */}
        <div className={styles["product-list-container"]}>
          <FilterArea />
        </div>
        {/* 产品列表  */}
        <div className={styles["product-list-container"]}>
          <ProductList
            data={productList}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
