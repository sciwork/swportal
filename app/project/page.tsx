import { Metadata } from "next";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Project",
};

const Page: React.FC = () => {
  return <Content filePath="project/index.mdx" />;
};

export default Page;
