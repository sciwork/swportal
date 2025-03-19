import clsx from "clsx";
import BlogCard from "@/components/BlogCard";
import { ArticleType, Collection } from "@/utils/collection";

type Props = {
  className?: string;
};

const BlogContainer = async ({ className }: Props) => {
  const collection = new Collection("blog");
  const blogs = await collection.listAll();
  console.log(
    "blogs",
    blogs.map((event) => event.article.title),
  );

  if (blogs.length === 0) {
    return null;
  }

  return (
      <div className={clsx("flex flex-row flex-wrap -mx-2", className)}>
        {blogs.map((event: ArticleType, index: number) => (
          <BlogCard key={index} event={event} />
        ))}
      </div>
  );
};

export default BlogContainer;
