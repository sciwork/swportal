import { useState } from "react";

type EventType = {
  title: string;
  descriptions?: string[];
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
      <ol>
        <>
          {props.event.descriptions?.map((description, index) => {
            return <li key={`descripton-${index}`}>{description}</li>;
          })}
        </>
      </ol>
    );
  };

  return (
    <div
      className="w-full p-3 text-sm md:text-base"
      onClick={() => setCollapsible(!collapsible)}
    >
      <p>{props.event.title}</p>
      {props.event.descriptions ? (
        <div className={`overflow-hidden p-3 text-left`}>
          <Detail />
        </div>
      ) : null}
    </div>
  );
};

const HorizontalTable = (props: { schedules: ScheduleType[] }) => {
  return (
    <table className="mb-5 w-full border-2 border-red-800">
      <thead>
        <tr>
          <th>Timetable</th>
          {Array(GetMaxEventCount(props.schedules))
            .fill(1)
            .map((value, index) => {
              return <th key={`topic-${index}`}>Topic {`${index + 1}`}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {props.schedules.map((schedule, index) => {
          return (
            <tr
              className={`${index == props.schedules.length - 1 ? "" : "border-b-[1.5px]"}`}
              key={`${schedule.time}`}
            >
              <td className="text-nowrap align-middle">{schedule.time}</td>
              {schedule.events.map((event, index) => {
                return (
                  <td
                    colSpan={
                      schedule.events.length == 1
                        ? GetMaxEventCount(props.schedules)
                        : 1
                    }
                    key={`${schedule.time}-event-${index}`}
                    className="border-l-[1.5px] border-l-[#cccccc] align-middle"
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
      <thead>
        <tr>
          <th>Topics</th>
        </tr>
      </thead>
      <tbody>
        {props.schedules?.map((schedule) => {
          return (
            <tr className="border-b-[1.5px]" key={`${schedule.time}`}>
              <td className="align-middle">
                <p className="mt-0 text-center font-bold">{schedule.time}</p>
                <div className="flex flex-col gap-3">
                  {schedule.events.map((event, index) => {
                    return (
                      <div
                        className="flex flex-row gap-3 rounded border border-[#cccccc] p-2 shadow-md"
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
