import { globby } from "globby";
import { Metadata, ResolvingMetadata } from "next";
import path from "path";
import Content from "@/components/Content";
import * as markdown from "@/utils/markdown";

const DIR_NAME = "contents";

type ParamsType = {
  year: string;
  article: string;
};

type ArticleDataType = markdown.FrontmatterType & {
  content: string;
};

export type ArticleType = {
  collection: string;
  params: ParamsType;
  article: ArticleDataType;
};

export class Collection {
  collection: string;

  constructor(collection: string) {
    this.collection = collection;
  }

  static async getArticleData(
    collection: string,
    year: string,
    article: string,
  ): Promise<ArticleDataType> {
    const filePath = path.join(DIR_NAME, collection, year, `${article}.mdx`);
    const data = await markdown.read(filePath);

    return data;
  }

  async listAll(): Promise<ArticleType[]> {
    const dirPath = path.join(DIR_NAME, this.collection);
    const filePaths = await globby([dirPath], {
      expandDirectories: { extensions: ["mdx"] },
    });
    const rawData = await Promise.all(
      filePaths.map(async (filePath) => {
        // extract year and article from filePath
        const [year, article] = filePath.split("/").slice(-2);
        const articleName = article.replace(".mdx", "");

        // work around for ${collection}/index.mdx case
        if (year === this.collection && article === "index.mdx") {
          return null;
        }

        const articleData = await Collection.getArticleData(
          this.collection,
          year,
          articleName,
        );

        return {
          collection: this.collection,
          params: {
            year,
            article: articleName,
          },
          article: articleData,
        };
      }),
    );

    return (
      rawData
        .filter((p) => p !== null)
        // sort articles by date descending, date format like 2024-03-01 22:27
        .sort((a, b) => {
          const dateA = new Date(a.article.date);
          const dateB = new Date(b.article.date);

          if (dateB > dateA) {
            return 1;
          }

          return -1;
        })
    );
  }

  async list(page: number = 1, size: number = 10) {
    const articles = await this.listAll();
    const start = (page - 1) * size;
    return articles.slice(start, start + size);
  }

  async getArticleData(
    year: string,
    article: string,
  ): Promise<ArticleDataType> {
    return await Collection.getArticleData(this.collection, year, article);
  }
}

export const buildCollection = (collection: string) => {
  const collectionData = new Collection(collection);
  const generateStaticParams = async (): Promise<ParamsType[]> => {
    const articles = await collectionData.listAll();

    return articles.map(({ params }) => params);
  };

  const generateMetadata = async (
    { params }: { params: Promise<ParamsType> },
    parent: ResolvingMetadata,
  ): Promise<Metadata> => {
    // read route params
    const { year, article } = await params;

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    // get mdx metadata
    const articleData = await collectionData.getArticleData(year, article);

    return {
      title: articleData.title,
      description: articleData.description,
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

    return <Content filePath={`${collection}/${year}/${article}.mdx`} />;
  };

  return {
    generateStaticParams,
    generateMetadata,
    Page,
  };
};
