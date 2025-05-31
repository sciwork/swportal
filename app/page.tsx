import Content from "@/components/Content";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Collection } from "@/utils/collection";

const Home: React.FC = async () => {
  const collection = new Collection("sprint");
  const sprints = await collection.list();

  return (
    <>
      <UpcomingEvents className="mb-10" events={sprints} />
      <Content filePath="index.mdx" />
    </>
  );
};

export default Home;
