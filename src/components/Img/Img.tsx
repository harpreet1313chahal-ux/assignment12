import React from "react";
import { ImgProps } from "./Img.types";

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width = 200,
  height = 200,
}) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};
