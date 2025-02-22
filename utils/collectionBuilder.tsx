import { readFileSync } from "fs";
import { globby } from "globby";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from "next";
import path from "path";
import Content from "@/components/Content";

const DIR_NAME = "contents";

type ParamType = {
  year: string;
  article: string;
};

export const buildCollection = (collection: string) => {
  const generateStaticParams = async (): Promise<ParamType[]> => {
    const dirPath = path.join(DIR_NAME, collection);
    const filePaths = await globby([dirPath], {
      expandDirectories: { extensions: ["mdx"] },
    });
    const params = filePaths
      .map((filePath) => {
        // extract year and article from filePath
        const [year, article] = filePath.split("/").slice(-2);

        // work around for ${collection}/index.mdx case
        if (year === collection && article === "index.mdx") {
          return null;
        }

        return {
          year,
          article: article?.replace(".mdx", ""),
        };
      })
      .filter((p) => p !== null);

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
    const filePath = path.join(DIR_NAME, collection, year, `${article}.mdx`);
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
      <Content filePath={`${DIR_NAME}/${collection}/${year}/${article}.mdx`} />
    );
  };

  return {
    generateStaticParams,
    generateMetadata,
    Page,
  };
};
