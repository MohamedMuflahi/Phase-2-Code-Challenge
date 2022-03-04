import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [BotData, setBotData] = useState([]);
  const [armyData, setArmyData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(resp=> resp.json())
    .then(data => {
      setBotData(data);
    })
  }, [])
  return (
    <div>
      <YourBotArmy data={armyData} setData={setArmyData}/>
      <BotCollection data={BotData} setData={setBotData}  armyData={armyData} setArmyData={setArmyData}/>
    </div>
  )
}

export default BotsPage;
