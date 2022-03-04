import React from "react";
import BotCard from './BotCard'
function BotCollection({data,setData, armyData, setArmyData}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {data.map(item=>{
          return <BotCard key={item.id} bot={item} data={data} setData={setData} armyData={armyData} setArmyData={setArmyData}/>
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
