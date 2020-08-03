import Head from "next/head";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
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
    <div className='container'>
      <Head>
        <title>Estimate your animation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <InfoSection />
        <div className='content'>
          <EstimatedCost className='estimate'/>
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
      <Footer />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 95%
        }

        .scroll-section {
          align-self: flex-end;
          margin-left: 3%;
        }

        .content {
          display: flex;
          flex-direction: row;
          margin-left: 0;
          margin-top: 5%;
          width: 100%
        }

        @media screen and (max-width: 800px) {
          .content {
            display: flex;
            flex-direction: column-reverse;
            margin-left: 0;
            margin-top: 5%;
            width: 100%
          }
          .scroll-section {
            width: 100%
          }
        }
      `}</style>
    </div>
  );
};

export default Home;