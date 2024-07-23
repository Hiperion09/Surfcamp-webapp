import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";
import React from "react";

const FeaturedArticle = ({ article }) => {
  return (
    <Link href={`/blog/${article.slug}`} className="featured-items__article">
      <img
        className="featured-items__article-img"
        src={article.featuredImage}
        alt={`Go read article ${article.headline}`}
      />
      <div className="featured-items__article-text">
        <h5>{article.headline}</h5>
        <p className="copy-small">{formatDate(article.publishedAt)}</p>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
