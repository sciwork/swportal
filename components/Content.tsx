import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path/posix";
import remarkGfm from "remark-gfm";
import constants from "@/configurations/constants";
import AgendaTable from "@/components/AgendaTable";
import Map from "@/components/Map";
import TagIcon from "@/components/icons/TagIcon";
import * as markdown from "@/utils/markdown";

const components = {
  Map,
  AgendaTable,
  TagIcon,
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

type RawContentProps = {
  content: string;
};

export const RawContent = ({ content }: RawContentProps) => {
  return (
    <MDXRemote source={content} options={options} components={components} />
  );
};

type ContentProps = {
  filePath: string;
};

const Content = async ({ filePath }: ContentProps) => {
  const data = await markdown.read(path.join(constants.CONTENT_DIR, filePath));

  return <RawContent content={data.content} />;
};

export default Content;
