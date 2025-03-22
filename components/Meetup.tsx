import { useState } from "react";

type EventType = {
  title: string;
  description: string;
};

type ScheduleType = {
  time: string;
  events: EventType[];
};

const GetMaxEventCount = (schedules: ScheduleType[]) => {
  const count = schedules.reduce((r: ScheduleType, s: ScheduleType) =>
    r.events.length > s.events.length ? r : s,
  ).events.length;
  return count;
};

const EventCard = (props: { event: EventType }) => {
  const [collapsible, setCollapsible] = useState<boolean>(false);
  const Detail = () => {
    return (
      <div className="flex flex-col">
        {props.event.description.split("\n").map((content, index) => {
          return (
            <p className="m-0 min-h-6" key={`descripton-${index}`}>
              {content}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="w-full text-sm"
      onClick={() => setCollapsible(!collapsible)}
    >
      <p className="font-bold">{props.event.title}</p>
      {props.event.description ? (
        <div className={`overflow-hidden p-3 text-left`}>
          <Detail />
        </div>
      ) : null}
    </div>
  );
};

const HorizontalTable = (props: { schedules: ScheduleType[] }) => {
  return (
    <table className="mb-5 w-full border-separate border-spacing-5 border-0">
      <tbody>
        {props.schedules.map((schedule, index) => {
          return (
            <tr
              className={`${index == props.schedules.length - 1 ? "" : "border-b-[1.5px]"}`}
              key={`${schedule.time}`}
            >
              <td className="text-nowrap rounded p-0 align-middle text-xl font-bold">
                {schedule.time}
              </td>
              {schedule.events.map((event, index) => {
                return (
                  <td
                    colSpan={
                      schedule.events.length == 1
                        ? GetMaxEventCount(props.schedules)
                        : 1
                    }
                    key={`${schedule.time}-event-${index}`}
                    className="rounded-xl border border-[#cccccc]"
                  >
                    <EventCard event={event} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const VerticalTable = (props: { schedules: ScheduleType[] }) => {
  return (
    <table className="mb-5 w-full border-0">
      <tbody>
        {props.schedules?.map((schedule, index) => {
          return (
            <tr key={`${schedule.time}`}>
              <td className="align-middle">
                <p className="mb-8 mt-0 text-center text-xl font-bold">
                  {schedule.time}
                </p>
                <div className="flex flex-col gap-5">
                  {schedule.events.map((event, index) => {
                    return (
                      <div
                        className="flex flex-row gap-3 rounded-xl border border-[#cccccc] p-2"
                        key={`${schedule.time}-event-${index}`}
                      >
                        <div className="w-full">
                          <EventCard event={event}></EventCard>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const Meetup = (props: { schedules: ScheduleType[] }) => {
  return (
    <>
      <div className="hidden lg:block">
        <HorizontalTable schedules={props.schedules} />
      </div>
      <div className="blcok lg:hidden">
        <VerticalTable schedules={props.schedules} />
      </div>
    </>
  );
};
