import Head from "next/head";

import Layout from "../components/layout";
import InfoSection from "../components/InfoSection/InfoSection";
import EstimatedCost from "../components/EstimatedCost/EstimatedCost";
import MediumSection from "../components/MediumSection/MediumSection";
import StyleSection from "../components/StyleSection/StyleSection";
import DurationSection from "../components/DurationSection/DurationSection";
import TimeFrameSection from "../components/TimeFrameSection/TimeFrameSection";
import ProductionQualitySection from "../components/ProductionQualitySection/ProductionQualitySection";
import AdditionalOptionsSection from "../components/AdditionalOptionsSection/AdditionalOptionsSection";
import CommentSection from "../components/CommentSection/CommentSection";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Estimate your animation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <InfoSection />
        <div className='content'>
          <EstimatedCost className='estimate' />
          <div className='scroll-section'>
            <MediumSection />
            <StyleSection />
            <DurationSection />
            <TimeFrameSection />
            <ProductionQualitySection />
            <AdditionalOptionsSection />
            <CommentSection />
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 95%;
        }

        .scroll-section {
          align-self: flex-end;
          margin-left: 3%;
          width: 66.66%;
        }

        .content {
          display: flex;
          flex-direction: row;
          margin-left: 0;
          margin-top: 5%;
          width: 100%;
        }

        @media screen and (max-width: 800px) {
          .content {
            display: flex;
            flex-direction: column-reverse;
            margin-left: 0;
            margin-top: 5%;
            width: 100%;
          }
          .scroll-section {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
