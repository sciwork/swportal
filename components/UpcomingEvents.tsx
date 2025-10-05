"use client";

import clsx from "clsx";
import EventCard from "@/components/EventCard";
import { ArticleType } from "@/utils/collection";
import { DayUtils } from "@/utils/date";

const UPCOMING_EVENTS_SIZE = 4;

type Props = {
  className?: string;
  events: ArticleType[];
};

const UpcomingEvents = ({ className, events }: Props) => {
  const currentDate = DayUtils.now();
  const result: ArticleType[] = [];

  for (const event of events) {
    const eventDate = DayUtils.from(event.article.date);
    
    if (eventDate.isAfter(currentDate)) {
      result.push(event);
    } else {
      break;
    }
  }

  const upcomingEvents = result.reverse().slice(0, UPCOMING_EVENTS_SIZE);

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
