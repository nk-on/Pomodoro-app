import React from "react";

interface SectionProps<T> {
  title: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function Section<T>({
  title,
  data,
  renderItem,
}: SectionProps<T>) {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center p-0 gap-[30px] py-[10px] pb-[30px]  px-[10px]">
        <h1 className="font-bold tracking-[3px]">{title}</h1>
        <div className="flex justify-between max-w-[90%] gap-[10px]">
          {data.map((item) => renderItem(item))}
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#E3E1E1]" />
    </>
  );
}
