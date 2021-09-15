import Companies from "../components/companies";
import ConsultancyService from "../components/consultancy-service";
import Hero from "../components/hero";
import Layout from "../components/layout";
import MentoringService from "../components/mentoring-service";
import Testimonials from "../components/testimonials";

function Home() {
  return (
    <Layout>
      <Hero />
      <MentoringService />
      <ConsultancyService />
      <Testimonials />
      <Companies />
    </Layout>
  );
}

export default Home;
