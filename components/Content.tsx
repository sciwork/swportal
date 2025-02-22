import { readFileSync } from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type ContentProps = {
  filePath: string;
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

const Content = ({ filePath }: ContentProps) => {
  const fileContent = readFileSync(filePath);
  const { content } = matter(fileContent);

  return <MDXRemote source={content} options={options} />;
};

export default Content;
