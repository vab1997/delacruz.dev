import Footer from "../components/footer";
import Layout from "../components/layout";
import MentoringBenefits from "../components/mentoring-benefits";
import MentoringIntro from "../components/mentoring-intro";
import MentoringStyle from "../components/mentoring-style";
import NavBar from "../components/navbar";
import Pricing from "../components/pricing";

function Mentoring() {
  return (
    <Layout>
      <NavBar />
      <MentoringIntro />
      <Pricing />
      <MentoringStyle />
      <MentoringBenefits />
      <Footer />
    </Layout>
  );
}

export default Mentoring;
