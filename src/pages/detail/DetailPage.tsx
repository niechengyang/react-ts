import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(params, "params", location, "location");
  console.log(navigate, 'navigate')
  return <h1>路游路线详情页面, 路线ID: {touristRouteId}</h1>;
};
