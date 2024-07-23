import { extractImageLandscapeUrl } from "@/utils/strapi.utils";
import React from "react";

const LandscapeImage = ({ imageData }) => {
  return (
    <div className="article-image">
      <img src={extractImageLandscapeUrl(imageData)} alt="" />
      {imageData.imageCaption && (
        <p className="copy article-image__caption copy-small">
          {imageData.imageCaption}
        </p>
      )}
    </div>
  );
};

export default LandscapeImage;
