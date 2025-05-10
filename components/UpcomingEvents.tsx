import clsx from "clsx";
import EventCard from "@/components/EventCard";
import { ArticleType, Collection } from "@/utils/collection";

type Props = {
  className?: string;
};

const UpcomingEvents = async ({ className }: Props) => {
  const collection = new Collection("sprint");
  const sprints = await collection.list();
  const upcomingEvents = sprints
    .slice(0, 2)
    .filter((event) => event.article.date > new Date());

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <h2 className="mb-5 text-center">Upcoming Events</h2>
      {upcomingEvents.map((event: ArticleType, index: number) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default UpcomingEvents;
