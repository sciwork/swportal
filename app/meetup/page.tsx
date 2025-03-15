import { Metadata } from "next";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Meetup",
};

const Page: React.FC = () => {
  return <Content filePath="meetup/index.mdx" />;
};

export default Page;
