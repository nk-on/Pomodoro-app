interface customvaluesObj {
  current: {
    minutes: number;
    seconds: number;
    title: string;
  }[];
}
interface TimeInput {
  title: string;
  customvaluesObj: customvaluesObj[];
}
function TimeInput({ title, customvaluesObj }: TimeInput) {
  return (
    <>
      <div className="w-[100%]">
        <h1 className="text-[#A5A6B2]">{title}</h1>
        <div className="lg:w-[140px] h-[48px] bg-[#EFF1FA] rounded-[10px] flex justify-between items-center px-[10px]">
          <input
            type="number"
            className="h-[48px] w-[50%]  bg-[#EFF1FA]"
            onChange={(e) => {
            console.log(e.target.value)
            customvaluesObj.current = customvaluesObj.current.map((element) => {
                if (title === element.title) {
                  return {
                    ...customvaluesObj,
                    minutes: Number(e.target.value),
                    title: title,
                  };
                }
                return element;
              });
            }}
          />
          <div className="flex flex-col  pt-[10px]">
            <div className="bg-[url(public/arrow-up.svg)] bg-no-repeat w-[12px] h-[17px] cursor-pointer"></div>
            <div className="bg-[url(public/arrow-down.svg)] bg-no-repeat w-[12px] h-[17px] cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeInput;
