import { Metadata } from "next";
import NextLink from "next/link";
import { ArticleType, Collection } from "@/utils/collection";
import { ArticleCard } from "@/components/ArticleCard";
import dayjs from "dayjs";

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
                <NextLink
                  className="no-underline"
                  key={`${article.params.year}/${article.params.article}`}
                  href={`/meetup/${article.params.year}/${article.params.article}`}
                >
                  { /* Because the meetup time before 2025/06/11 is wrong. I decide to hide them. */ }
                  <ArticleCard 
                    article={article} 
                    hideDate={dayjs(article.article.date).isBefore("2025-06-18")}
                  ></ArticleCard>
                </NextLink>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Page;
