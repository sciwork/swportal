import { readFileSync } from "fs";
import { globby } from "globby";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from "next";
import path from "path";
import Content from "@/components/Content";

const dirName = "contents";

type ParamType = {
  year: string;
  article: string;
};

export const buildCollection = (collection: string) => {
  const generateStaticParams = async (): Promise<ParamType[]> => {
    const dirPath = path.join(dirName, collection);
    const filePaths = await globby([dirPath], {
      expandDirectories: { extensions: ["mdx"] },
    });
    const params = filePaths.map((filePath) => {
      // extract year and article from filePath
      const [year, article] = filePath.split("/").slice(-2);

      return {
        year,
        article: article?.replace(".mdx", ""),
      };
    });

    return params;
  };

  const generateMetadata = async (
    { params }: { params: Promise<ParamType> },
    parent: ResolvingMetadata,
  ): Promise<Metadata> => {
    // read route params
    const { year, article } = await params;

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    // get mdx metadata
    const filePath = path.join(dirName, collection, year, `${article}.mdx`);
    const fileContent = readFileSync(filePath, "utf8");
    const { data: frontmatter } = matter(fileContent);

    return {
      title: frontmatter.title,
      openGraph: {
        images: [...previousImages],
      },
    };
  };

  const Page = async ({
    params,
  }: {
    params: Promise<{ year: string; article: string }>;
  }) => {
    const { year, article } = await params;

    return (
      <Content filePath={`${dirName}/${collection}/${year}/${article}.mdx`} />
    );
  };

  return {
    generateStaticParams,
    generateMetadata,
    Page,
  };
};
