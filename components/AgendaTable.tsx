type AgendaTableRowProps = {
  time: string;
  children: React.ReactNode;
};

const AgendaTableRow = ({ time, children }: AgendaTableRowProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="border-2 border-none px-4 text-center text-gray-500 lg:w-40 lg:py-4">
        {time}
      </div>
      <div className="flex flex-1 flex-col gap-6 lg:flex-row">{children}</div>
    </div>
  );
};

type AgendaTableTopicProps = {
  title: string;
  children?: React.ReactNode;
};

const AgendaTableTopic = ({ title, children }: AgendaTableTopicProps) => {
  return (
    <div className="flex-1 rounded-xl border-2 border-zinc-100 p-4">
      <div className="text-center font-semibold">{title}</div>
      {children && <div>{children}</div>}
    </div>
  );
};

type AgendaTableProps = {
  children: React.ReactNode;
};

const AgendaTable = ({ children }: AgendaTableProps) => {
  return <div className="space-y-6">{children}</div>;
};

AgendaTable.Row = AgendaTableRow;
AgendaTable.Topic = AgendaTableTopic;

export default AgendaTable;
