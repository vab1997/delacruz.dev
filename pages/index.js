import Hero from "../components/hero";
import Layout from "../components/layout";
import NavBar from "../components/navbar";

function Home() {
  return (
    <Layout>
      <NavBar />
      <Hero />
    </Layout>
  );
}

export default Home;
