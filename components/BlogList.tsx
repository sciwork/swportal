import clsx from "clsx";
import BlogCard from "@/components/BlogCard";
import { ArticleType } from "@/utils/collection";

type Props = {
  className?: string;
  blogs: ArticleType[];
};

const BlogContainer = ({ className, blogs }: Props) => {
  if (blogs.length === 0) {
    return null;
  }

  return (
    <div className={clsx("-mx-2 flex flex-row flex-wrap", className)}>
      {blogs.map((event: ArticleType, index: number) => (
        <BlogCard key={index} event={event} />
      ))}
    </div>
  );
};

export default BlogContainer;
