"use client";

import dynamic from "next/dynamic";

type ContentProps = {
  filePath: string;
};

const Content = ({ filePath }: ContentProps) => {
  const LoadedContent: React.ElementType = dynamic(
    () => {
      // Wired behavior. If I include @/contents/ filePath,
      // it will compile failed
      return import(`@/contents/${filePath}`);
    },
    {
      loading: () => <div>Loading...</div>,
    },
  );

  return <LoadedContent />;
};

export default Content;
