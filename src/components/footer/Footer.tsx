import React from "react";
import { Layout, Typography } from "antd";
import { BusinessPartners } from "../businessPartners";
export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <BusinessPartners/>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        版权所有 @ React 旅游网
      </Typography.Title>
    </Layout.Footer>
  );
};
