import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import axios from "axios";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";
import BlogPreview from "./_components/BlogPreview/BlogPreview";

export default async function Home({ theme = "turquoise" }) {


  //Obtener datos de bloques de información
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");
  const infoBlockData = processInfoBlocks(data)

  const heroHeadline = (
    <>
      <h1>Barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      {infoBlockData.map((data) => <InfoBlock key={data.id} data={data}/>)}
      <BlogPreview/>
    </main>
  );
}

export const revalidate = 300;
