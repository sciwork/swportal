import { Metadata } from "next";
import NextLink from "next/link";
import { ArticleType, Collection } from "@/utils/collection";

export const metadata: Metadata = {
  title: "Meetup",
};

const Page: React.FC = async () => {
  const collection = new Collection("meetup");
  const meetups = await collection.listByYear();

  return (
    <section>
      {Array.from(meetups.keys()).map((year) => {
        const articles = meetups.get(year) || [];
        return (
          <div key={year} className="mb-10">
            <h3>Meetup {year}</h3>
            <ul>
              {articles.map((article: ArticleType) => (
                <li key={article.article.title}>
                  <NextLink
                    href={`/meetup/${article.params.year}/${article.params.article}`}
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
