import Content from "@/components/Content";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Collection } from "@/utils/collection";

const Home: React.FC = async () => {
  const events = await new Collection(["sprint", "meetup"]).list();

  return (
    <>
      <UpcomingEvents className="mb-10" events={events} />
      <Content filePath="index.mdx" />
    </>
  );
};

export default Home;
