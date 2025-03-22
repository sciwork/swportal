import { useState } from "react";

type EventType = {
  title: string;
  descriptions?: string[];
};

type ScheduleType = {
  time: string;
  events: EventType[];
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
          <th>Topic 1</th>
          <th>Topic 2</th>
          <th>Topic 3</th>
        </tr>
      </thead>
      <tbody>
        {props.schedules.map((schedule, index) => {
          return (
            <tr
              className={`${index == props.schedules.length - 1 ? "" : "border-b-[1.5px]"}`}
              key={`${schedule.time}`}
            >
              <td className="align-middle">{schedule.time}</td>
              {schedule.events.map((event, index) => {
                return (
                  <td
                    colSpan={schedule.events.length == 1 ? 3 : 1}
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
    <table className="mb-5 w-full border-2 border-red-800">
      <thead>
        <tr>
          <th>Topics</th>
        </tr>
      </thead>
      <tbody>
        {props.schedules?.map((schedule) => {
          return (
            <tr className="border-b-[1.5px]" key={`${schedule.time}`}>
              <td className="border-l-[1.5px] border-l-[#cccccc] align-middle">
                <div className="flex flex-col gap-3">
                  {schedule.events.map((event, index) => {
                    return (
                      <div
                        className="flex flex-row gap-3 rounded border p-2"
                        key={`${schedule.time}-event-${index}`}
                      >
                        <p className="my-auto text-nowrap text-sm md:text-base">
                          {schedule.time}
                        </p>
                        <div className="w-full border-l border-l-[#eeeeee]">
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
      <div className="hidden sm:block">
        <HorizontalTable schedules={props.schedules} />
      </div>
      <div className="blcok sm:hidden">
        <VerticalTable schedules={props.schedules} />
      </div>
    </>
  );
};
