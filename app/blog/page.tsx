import { Metadata } from "next";
import BlogContainer from "@/components/BlogContainer";

export const metadata: Metadata = {
  title: "Blog",
};

const Page: React.FC = () => {
  return <BlogContainer  />;
};

export default Page;
