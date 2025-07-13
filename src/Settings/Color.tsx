function Color({
  color,
  selectedId,
  id,
  dispatch
}: {
  color: string;
  selectedId:number,
  id: number;
  dispatch: React.ActionDispatch<[action: { type: string; payload: { id: number } }]>;
}) {
  return (
    <div
      className={`w-[40px] h-[40px] rounded-[50%] cursor-pointer flex justify-center items-center`}
      style={{ backgroundColor: `${color}` }}
      onClick={()=> dispatch({type:'colorInput',payload:{id}})}
    >
      {
        id === selectedId && <img src="public/checkMark.svg" alt="checkMark"/>
      }
    </div>
  );
}

export default Color;
