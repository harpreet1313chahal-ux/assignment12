import React from "react";
import { HeroImageProps } from "./HeroImage.types";

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
        }}
      />
      {title && <h2>{title}</h2>}
    </div>
  );
};
