function Color({color}:{color:string}) {
  return (
    <div className={`w-[40px] h-[40px] rounded-[50%] cursor-pointer`} style={{backgroundColor:`${color}`}}>
      
    </div>
  )
}

export default Color;
