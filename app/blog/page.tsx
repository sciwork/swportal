import { Metadata } from "next";
import BlogList from "@/components/BlogList";
import { Collection } from "@/utils/collection";

export const metadata: Metadata = {
  title: "Blog",
};

const Page: React.FC = async () => {
  const collection = new Collection("blog");
  const blogs = await collection.listAll();
  return <BlogList blogs={blogs} />;
};

export default Page;
