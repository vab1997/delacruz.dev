import Head from "next/head";
import Layout from "../components/layout";
import MentoringBenefits from "../components/mentoring-benefits";
import MentoringHero from "../components/mentoring-hero";
import MentoringPlans from "../components/mentoring-plans";
import MentoringPricing from "../components/mentoring-pricing";
import MentoringStyle from "../components/mentoring-style";

function Mentoring() {
  return (
    <Layout>
      <MentoringHero />
      <MentoringBenefits />
      <MentoringPlans />
      <MentoringPricing />
      <MentoringStyle />
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
      </Head>
    </Layout>
  );
}

export default Mentoring;
