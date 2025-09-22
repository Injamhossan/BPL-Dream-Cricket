import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SelectedPlayer from "./components/SelectedPlayers";


const fatchPlayer = async () => {
  const res = await fetch("/public/player.json");
  return res.json();
}

function App() {
  const playersPromise = fatchPlayer();

  const [toggle, setToggole] = useState(true);
  return (
    <>
      {/* Navbar Section  */}

      <Navbar></Navbar>

      {/* Banner Section */}

      <Banner></Banner>

      {/* Available player */}
<div className="flex justify-between mx-auto max-w-[1600px] mt-[100px] items-center">
  <h1 className="text-black text-[28px] font-bold">
    Available Players
  </h1>
  <div className="flex border-2 border-[#1313131a] rounded-[10px] shadow-sm overflow-hidden">
    <button onClick={()=>setToggole(true)} className="text-black bg-[#E7FE29] font-bold px-6 py-2 border-r-2 border-[#1313131a] focus:outline-none">
      Available
    </button>
    <button onClick={()=>setToggole(false)} className="text-gray-500 font-bold px-6 py-2 focus:outline-none">
      Selected (<span>0</span>)
    </button>
  </div>
</div>
      

      {
        toggle == true? <Suspense fallback={<span className="loading loading-spinner loading-xl text-black"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayer></SelectedPlayer>
      }
      
      
      
      
    </>
  );
}

export default App;
