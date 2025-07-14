import type { TimeInputProps } from "../Interfaces";
function TimeInput({  customvaluesObj }: TimeInputProps) {
  return (
    <>
      <div className="w-[100%]">
        <div className="lg:w-[140px] h-[48px] bg-[#EFF1FA] rounded-[10px] flex justify-between items-center px-[10px]">
          <input
            type="number"
            className="h-[48px] w-[50%]  bg-[#EFF1FA]"
            onChange={(e) => {
            console.log(e.target.value)
            customvaluesObj.current = customvaluesObj.current.map((element) => {
                if (title === element.title) {
                  return {
                    ...element,
                    minutes: Number(e.target.value),
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
