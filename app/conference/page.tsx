import { Metadata } from "next";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Conference",
};

const Page: React.FC = () => {
  return <Content filePath="conference/index.mdx" />;
};

export default Page;
