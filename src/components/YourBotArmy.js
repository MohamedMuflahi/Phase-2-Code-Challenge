import React from "react";
import BotSpecs from './BotSpecs'
function YourBotArmy({data,setData,armyData, setArmyData}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {data.map(item=>{
          return <BotSpecs key={item.id} bot={item} armyData={data} setArmyData={setData}/>
        })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
