import NextLink from "next/link";
import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventTime from "@/components/EventTime";
import { ArticleType } from "@/utils/collection";

type Props = {
  event: ArticleType;
};

const EventCard = ({ event }: Props) => {
  const eventDate = event.article.date;
  const month = eventDate.toLocaleString("default", { month: "short" });
  const day = eventDate.getDate();
  const currentDate = new Date();

  if (eventDate < currentDate) {
    return null;
  }

  return (
    <NextLink
      href={`/${event.collection}/${event.params.year}/${event.params.article}`}
      className="my-4 flex w-full overflow-hidden rounded-lg no-underline shadow-md"
    >
      <div className="flex w-24 flex-col items-center justify-center bg-red-800 py-4 text-white">
        <span className="text-3xl">{day}</span>
        <span className="text-xl">{month}</span>
      </div>
      <div className="flex flex-1 flex-col justify-center p-4">
        <h4 className="text-gray-800">{event.article.title}</h4>
        <span className="text-gray-600">
          <FontAwesomeIcon icon={faMapMarker} className="mr-1 w-5" />
          {event.article.location || "TBD"}
        </span>
        <span className="text-gray-600">
          <FontAwesomeIcon icon={faClock} className="mr-1 w-5" />
          {event.article.eventTime || "TBD"}
        </span>
        <span className="mt-2 text-sm text-gray-700">
          <EventTime eventDate={eventDate} />
        </span>
      </div>
    </NextLink>
  );
};

export default EventCard;
