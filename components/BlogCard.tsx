import NextLink from "next/link";
import { ArticleType } from "@/utils/collection";
import { DayUtils } from "@/utils/date";

type Props = {
  event: ArticleType;
};

const BlogCard = ({ event }: Props) => {
  const eventDate = event.article.date;

  return (
    <div className="mb-4 w-full px-2 sm:w-full md:w-1/2">
      <div className="my-4 flex h-full max-w-4xl flex-col rounded-lg bg-white px-10 py-6 shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">
            {DayUtils.toBlogFormat(DayUtils.from(eventDate))}
          </span>
        </div>
        <div className="mt-2">
          <NextLink
            className="text-gray-800 no-underline hover:text-red-600 hover:no-underline"
            href={`/${event.collection}/${event.params.year}/${event.params.article}`}
          >
            <h3>{event.article.title}</h3>
          </NextLink>

          <div className="mt-2 line-clamp-4 text-gray-700">
            {event.article.description}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <NextLink
            className="text-blue-600 hover:underline"
            href={`/${event.collection}/${event.params.year}/${event.params.article}`}
          ></NextLink>
          <div>
            <div className="flex items-center">
              <h6 className="mx-2 text-gray-600">By</h6>
              <h5 className="text-gray-600">{event.article.author}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
