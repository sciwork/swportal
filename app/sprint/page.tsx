import { Metadata } from "next";
import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Sprint",
};

const Page: React.FC = () => {
  return <Content filePath="sprint/index.mdx" />;
};

export default Page;
