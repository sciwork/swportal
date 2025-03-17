import Content from "@/components/Content";
import UpcomingEvents from "@/components/UpcomingEvents";

const Home: React.FC = () => {
  return (
    <>
      <UpcomingEvents className="mb-10" />
      <Content filePath="index.mdx" />
    </>
  );
};

export default Home;
