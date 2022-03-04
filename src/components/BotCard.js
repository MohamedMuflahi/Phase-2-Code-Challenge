import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot,data,setData,armyData, setArmyData }) {
  function onClick(){
    if(armyData.find(e=> e.id === bot.id)){
      console.log('Already Exists');
    }else{
      setArmyData([...armyData, bot])
    }
  }
  function handleDelete(){
    fetch('http://localhost:8002/bots/' + bot.id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => {
  setArmyData(armyData.filter(e=>e.id !== bot.id));
  setData(data.filter(e=>e.id !== bot.id));
})
  }
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={onClick}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={handleDelete}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
