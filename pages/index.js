import Head, {useEffect, useState} from "next/head";
import { connect } from "react-redux";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import EstimatedCost from "../components/EstimatedCost/EstimatedCost";
import MediumSection from "../components/MediumSection/MediumSection";
// import mediumButtons from "../components/MediumSection/buttonsData.json";
import StyleSection from "../components/StyleSection/StyleSection";
import DurationSection from "../components/DurationSection/DurationSection";
import TimeFrameSection from "../components/TimeFrameSection/TimeFrameSection";
import ProductionQualitySection from "../components/ProductionQualitySection/ProductionQualitySection";
import AdditionalOptionsSection from "../components/AdditionalOptionsSection/AdditionalOptionsSection";


const Home = (props) => {
  // const [mediumState, setstate] = useState(0);
  // useEffect(() => {
  //   props.setMediumButtons(mediumButtons);
  // }, []);

  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <InfoSection />
        <div className='row'>
          <EstimatedCost />
          <div className='scroll-section'>
            <MediumSection />
            <StyleSection />
            <DurationSection />
            <TimeFrameSection />
            <ProductionQualitySection />
            <AdditionalOptionsSection />
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
        }

        .scroll-section {
          align-self: flex-end;
          margin-left: 35px;
        }

        .row {
          display: flex;
          flex-direction: row;
          margin-left: 0;
        }
      `}</style>
    </div>
  );
};

// const mapDispatchToProps = { setMediumButtons };
// const mapStateToProps = (state) => ({ mediumReducer: state.mediumReducer });
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;