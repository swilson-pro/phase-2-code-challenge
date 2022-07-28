import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planeteers, setPlaneteers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [randomPlaneteers, setRandomPlaneteers] = useState([])

  const fetchPlaneteers = async () => {
    const response = await fetch('http://localhost:8003/planeteers')
    const planeteersArray = await response.json()
    setPlaneteers(planeteersArray)
  }

  useEffect(() => {
    fetchPlaneteers()
  }, [])


  const handleAddPlaneteer = (newPlaneteer) => {
    const updatedPlaneteersArray = [...planeteers, newPlaneteer]
    setPlaneteers(updatedPlaneteersArray)
  }


  const displayedPlaneteers = planeteers.filter(planeteer => {
    return planeteer.name.toLowerCase().includes(searchTerm.toLowerCase())
  })


  return (
    <div>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <RandomButton planeteers={planeteers} onAddPlaneteer={handleAddPlaneteer} />
      <PlaneteersContainer planeteers={displayedPlaneteers} />
    </div>
  );
}

export default App;
