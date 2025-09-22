import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="max-w-[1630px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[40px] px-4">
        {playerData.map((player) => (
          <div key={player.id} className="card bg-base-100 shadow-sm">
            <figure className="h-64 overflow-hidden">
              <img
                src={player.player_img}
                alt={player.player_name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body bg-white text-black">
              <h2 className="card-title">
                <img src="/src/assets/user1.png" alt="" /> {player.player_name}
              </h2>
              <div className="flex justify-between items-center pb-[16px] border-b-1 border-[#1313131a]">
                <h1>
                  <i className="fa-solid fa-flag text-[#13131380] text-[20px] items-center pr-2"></i>
                  {player.player_country}
                </h1>
                <div className="bg-[#1313130d] px-[16px] py-[9px] rounded-[8px]">
                  <h1>{player.playing_role}</h1>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                <h1 className="font-bold pb-[16px]">Rating</h1> 
                <h1 className="font-bold">{player.rating}</h1>
                </div>
                <div className="flex justify-between mb-[12px]">
                  <p className="font-bold">{player.batting_style}</p>
                  <p className="text-right text-[#131313b3]">{player.bowling_style}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">Price: {player.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn border-[#1313131a] bg-white text-black rounded-[8px]">
                      Choose Player
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;