import { Metadata } from "next";
import NextLink from "next/link";
import { ArticleType, Collection } from "@/utils/collection";

export const metadata: Metadata = {
  title: "Sprint",
};

const Page: React.FC = async () => {
  const collection = new Collection("sprint");
  const sprints = await collection.listByYear();

  return (
    <section>
      <p>
        Sciwork hosts coding sprints for open-source projects for scientific,
        numerical, and engineering applications. This page lists the sprints
        that hosted by sciwork.
      </p>
      {Array.from(sprints.keys()).map((year) => {
        const articles = sprints.get(year) || [];
        return (
          <div key={year} className="mb-10">
            <h3>Sprint {year}</h3>
            <ul>
              {articles.map((article: ArticleType) => (
                <li key={article.article.title}>
                  <NextLink
                    href={`/sprint/${article.params.year}/${article.params.article}`}
                  >
                    {article.article.title}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Page;
