import NextLink from "next/link";
import { ArticleType } from "@/utils/collection";
import dayjs from "dayjs";

type Props = {
  event: ArticleType;
};

const BlogCard = ({ event }: Props) => {
  const eventDate = event.article.date;

  return (
    <div className="w-full sm:w-full md:w-1/2 mb-4 px-2">
    <div className="max-w-4xl flex flex-col h-full px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{ formatDate(eventDate) }</span>
      </div>

      <div className="mt-2">
      <NextLink
        className="text-gray-800 no-underline hover:no-underline" 
        href={`/${event.collection}/${event.params.year}/${event.params.article}`} 
        >
            <h3>{ event.article.title }</h3>
        </NextLink>

        <div className="mt-2 text-gray-700">
          {event.article.description  }
        </div>
      </div>

      <div className="flex-1"></div>
      <div className="flex justify-between items-center mt-4">
      <NextLink
        className="text-blue-600 hover:underline" 
        href={`/${event.collection}/${event.params.year}/${event.params.article}`} 
        ></NextLink>
        <div>
          <div className="flex items-center">
            <h6 className="text-gray-600 mx-2">By</h6>
            <h5 className="text-gray-600">{event.article.author  }</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

function formatDate(date: Date): string {
  return dayjs(date).format("DD MMMM YYYY");
}

export default BlogCard;
