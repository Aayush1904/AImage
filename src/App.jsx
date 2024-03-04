import Header from "./Components /Header";
import ButtonGradient from "./assets 2/svg/ButtonGradient";
import Hero from "./Components /Hero";
import Benefits from "./Components /Benefits";
import Colloboration from "./Components /Colloboration";
import Services from "./Components /Services";
import Pricing from "./Components /Pricing";
import Roadmap from "./Components /Roadmap";
import Footer from "./Components /Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colloboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
