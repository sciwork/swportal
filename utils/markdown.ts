import { promises as fs } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkMdx from "remark-mdx";
// @ts-expect-error no type definition
import strip from "remark-mdx-to-plain-text";

const DESCRIPTION_MAX_LENGTH = 200;
const EMPTY_LIST = [
  "code",
  "horizontalRule",
  "thematicBreak",
  "html",
  "table",
  "tableCell",
  "definition",
  "yaml",
  "toml",
  "jsx",
  "import",
  "export",
];

export type FrontmatterType = {
  date: string;
  title?: string;
  author?: string;
  url?: string;
  description?: string;
};

export const read = async (filePath: string) => {
  const fileContent = await fs.readFile(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  const plainText = await remark()
    .use(remarkMdx)
    .use(strip, EMPTY_LIST)
    .process(content)
    .then((result) => {
      const trimmedText = result.toString().trim();

      if (trimmedText.length > DESCRIPTION_MAX_LENGTH) {
        return trimmedText.slice(0, DESCRIPTION_MAX_LENGTH) + " ...";
      } else {
        return trimmedText;
      }
    });

  frontmatter.description = frontmatter.description || plainText;

  return {
    frontmatter: frontmatter as FrontmatterType,
    content,
  };
};
