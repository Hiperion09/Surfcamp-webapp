import React from "react";
import HighlightArticle from "../_components/Blog/HighlightArticle";
import SuscribeToNewsletter from "../_components/Blog/SuscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles } from "@/utils/strapi.utils";

export default async function page () {

  //Recuperar datos de blogs de strapi
  const blogData = await fetchBlogArticles()

  // Write different queries: first one to find the highlight blog article

  // Find the articles that are not highlight articles but sorted by publishin date

  const HighlightArticleData = blogData.find((article) => article.isHighlightArticle);
  const featuredArticles = blogData.filter((article) => !article.isHighlightArticle);

 
  return (
    <main className="blog-page">
        <HighlightArticle data={HighlightArticleData} />
        <SuscribeToNewsletter/>
        <FeaturedItems items={featuredArticles}/>
    </main>
  );
};

export const revalidate = 300;

