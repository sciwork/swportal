import { Metadata } from "next";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Training",
};

const Page: React.FC = () => {
  return <Content filePath="training/index.mdx" />;
};

export default Page;
