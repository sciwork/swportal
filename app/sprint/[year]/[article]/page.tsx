import fs from "fs";
import { Metadata, ResolvingMetadata } from "next";
import path from "path";
import Content from "@/components/Content";

const dirName = "contents";
const subDirName = "sprint";

export function generateStaticParams() {
  const dirPath = path.join(dirName, subDirName);
  const files = fs.readdirSync(dirPath);
  const params = files
    .filter((file) => {
      const fpath = path.join(dirPath, file);
      const stats = fs.statSync(fpath);

      return stats.isDirectory();
    })
    .flatMap((dir) => {
      const dirPath = path.join(dirName, subDirName, dir);
      const files = fs.readdirSync(dirPath);
      return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
          return {
            year: dir,
            article: file,
          };
        });
    });

  return params;
}

export async function generateMetadata(
  { params }: { params: Promise<{ article: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const articleName = (await params).article;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: articleName,
    openGraph: {
      images: [...previousImages],
    },
  };
}

const Page = async ({
  params,
}: {
  params: Promise<{ year: string; article: string }>;
}) => {
  const { year, article } = await params;

  return <Content filePath={`${subDirName}/${year}/${article}.mdx`} />;
};

export default Page;
