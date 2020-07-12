import Hero from "../components/hero";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";

function Home() {
  return (
    <Layout>
      <NavBar />
      <Skills />
      <Experience />
      <Testimonials />
      <Footer />
    </Layout>
  );
}

export default Home;
