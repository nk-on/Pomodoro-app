interface MyComponentProps {
  title: string;
  id: number;
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}
export default function MenuItem({
  title,
  id,
  selectedId,
  setSelectedId,
}: MyComponentProps) {
  return (
    <div
      className={`text-[#636984] font-bold w-[33%] h-[100%] flex justify-center items-center ${
        selectedId === id ? "bg-[#F87070] text-[#1f213f]" : "bg-[#151932]"
      } rounded-[26.5px]`}
      onClick={() => setSelectedId(id)}
    >
      {title}
    </div>
  );
}
