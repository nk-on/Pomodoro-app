export default function Clock() {
  return (
    <div
      className="w-[310px] h-[310px] rounded-[50%] flex justify-center items-center"
      style={{
        background: "linear-gradient(270.71deg, #2E325A 0%, #0E112A 100%)",
        boxShadow: "-50px -50px 100px #272C5A, 50px 50px 100px #121530",
      }}
    >
      <div className="w-[90%] h-[90%] bg-[#151932] rounded-[50%] flex flex-col justify-center items-center"> 
        <div className="w-[90%] h-[90%] border-[10px] border-[#F87070] rounded-[50%] flex flex-col justify-center items-center">
            <div className="text-[#fff] font-bold text-[70px]">00:00</div>
            <div className="text-[#fff] tracking-[.25em]">RESTART</div>
        </div>
      </div>
    </div>
  );
}
