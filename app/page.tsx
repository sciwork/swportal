import Content from "@/components/Content";
import UpcomingEvents from "@/components/UpcomingEvents";
import HomepageHero from "@/components/Homepage/Hero";
import HomepageDescription from "@/components/Homepage/Description";

const Home: React.FC = () => {
  return (
    <>
      <HomepageHero />
      {/* <HomepageDescription /> */}
      <UpcomingEvents className="mb-10" />
      {/* <Content filePath="index.mdx" /> */}
    </>
  );
};

export default Home;
