import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import InfoSection from '../components/InfoSection/InfoSection';
import EstimatedCost from '../components/EstimatedCost/EstimatedCost';
import MediumSection from '../components/MediumSection/MediumSection';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
      <main>
      <InfoSection />
      <EstimatedCost />
      <div className="scroll-section">
        <MediumSection />
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
        }
      `}</style>
    </div>
  )
}
