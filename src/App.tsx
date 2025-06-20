import "./App.css";
import Clock from "./Clock";
import Menu from "./Menu/Menu";
function App() {
  return <>
   <div className="bg-[#1f213f] w-[100vw] h-[100vh] flex flex-col justify-center items-center">
     <div className="h-[20%]">
       <Menu />
     </div>
     <Clock />
   </div>
  </>;
}

export default App;
