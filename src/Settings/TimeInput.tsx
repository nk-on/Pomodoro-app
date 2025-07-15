import { useState } from 'react';
import type { TimeInputProps } from '../Interfaces';
function TimeInput({ title, customvaluesObj }: TimeInputProps) {
  const [value, setValue] = useState<string | number>('');
  console.log(value);
  return (
    <>
      <div className="w-[100%]">
        <div className="lg:w-[140px] h-[48px] bg-[#EFF1FA] rounded-[10px] flex justify-between items-center px-[10px]">
          <input
            type="number"
            value={value}
            className="h-[48px] w-[50%]  bg-[#EFF1FA] outline-none"
            onKeyDown={(e) => {
              if (['-', 'e', 'E', '+', '.'].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              setValue(Number(e.target.value));
              customvaluesObj.current = customvaluesObj.current.map(
                (element) => {
                  if (title === element.title) {
                    return {
                      ...element,
                      minutes: Number(e.target.value),
                    };
                  }
                  return element;
                }
              );
            }}
          />
          <div className="flex flex-col  pt-[10px]">
            <div
              className="bg-[url(public/arrow-up.svg)] bg-no-repeat w-[12px] h-[17px] cursor-pointer"
              onClick={() =>
                setValue((value) => {
                  if (value === '') {
                    return 1;
                  }
                  return Number(value) + 1;
                })
              }
            ></div>
            <div
              className="bg-[url(public/arrow-down.svg)] bg-no-repeat w-[12px] h-[17px] cursor-pointer"
              onClick={() =>
                setValue((value) => {
                  if (value === '' || Number(value) <= 1) {
                    return 1;
                  }
                  return Number(value) - 1;
                })
              }
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeInput;
