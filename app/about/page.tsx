import { Metadata } from "next";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "About",
};

const Page: React.FC = () => {
  return <Content filePath="about/index.mdx" />;
};

export default Page;
