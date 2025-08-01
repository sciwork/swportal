"use client";

import clsx from "clsx";
import EventCard from "@/components/EventCard";
import { ArticleType } from "@/utils/collection";
import { DayUtils } from "@/utils/date";

type Props = {
  className?: string;
  events: ArticleType[];
};

const UpcomingEvents = ({ className, events }: Props) => {
  const upcomingEvents = events.slice(0, 2).filter((event) => {
    const eventDate = DayUtils.from(event.article.date);
    const currentDate = DayUtils.now();
    return eventDate.isAfter(currentDate);
  });

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
