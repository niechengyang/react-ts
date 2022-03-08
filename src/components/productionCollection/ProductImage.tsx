import React from "react";
import { Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";
interface PropsType {
  id: string | number;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: number;
}
export const ProductImage: React.FC<PropsType> = ({
  id,
  size,
  title,
  imageSrc,
  price,
}) => {
  const naviagte = useNavigate();
  return (
    <div
      onClick={() => {
        naviagte(`/detail/${id}`);
      }}
    >
      {size == "large" ? (
        <Image src={imageSrc} height={285} width={490}></Image>
      ) : (
        <Image src={imageSrc} height={120} width={240}></Image>
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </div>
  );
};
