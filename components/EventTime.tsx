"use client";

import { useEffect, useState } from "react";

enum EventStatus {
  HAPPENING,
  COMING_SOON,
  FINISHED,
}

type Props = {
  eventDate: Date;
};

const getRemainingTime = (eventDate: Date, now: Date) => {
  const distance = eventDate.getTime() - now.getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const EventTime = ({ eventDate }: Props) => {
  const [status, setStatus] = useState<EventStatus>(EventStatus.FINISHED);
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(eventDate, new Date()),
  );

  useEffect(() => {
    const countdown = setInterval(() => {
      const target = new Date(eventDate);
      const now = new Date();

      if (now < target) {
        // current date time is before the event date time
        setStatus(EventStatus.COMING_SOON);
        setRemainingTime(getRemainingTime(eventDate, now));
      } else if (now.getDate() === target.getDate()) {
        // current date time is the same day as the event date time
        setStatus(EventStatus.HAPPENING);
      } else {
        // current date time is after the event date time
        setStatus(EventStatus.FINISHED);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [eventDate]);

  switch (status) {
    case EventStatus.HAPPENING:
      return "Happening now!";
    case EventStatus.COMING_SOON:
      return `Starts in ${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;
    case EventStatus.FINISHED:
      return null;
  }
};

export default EventTime;
