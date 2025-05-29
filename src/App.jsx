import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'; 
import { useState } from 'react'
import './App.css'
import Card from './Card'
import Header from './Header'
import agentData from './assets/data/agents.json'
import Agentdetails from './Agentdetails';

function App() {
  const [selectedRole, setSelectedRole] = useState("All");
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const location=useLocation();

    // to check if the current rout is detail page matlab / ya /jett etc
    const isDeatilsPage= /^\/[a-z]+$/.test(location.pathname);

 const filteredAgents = agentData.filter(agent => {
    const matchesRole = selectedRole === "All" || agent.role === selectedRole;
    const matchesSearch = agent.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <>
    {!isDeatilsPage &&(
      <Header setSelectedRole={setSelectedRole}
       selectedRole={selectedRole}
       searchText={searchText}
       setSearchText={setSearchText}/>
       )}
       <Routes>
        <Route
        path="/"
        element={
       
      <div className="Cardsection  container  mx-auto h-auto flex flex-wrap items-center justify-center gap-4 p-4 ">
        {filteredAgents.map((agent, index) => (
          <Card
            key={index}
            name={agent.name}
            role={agent.role}
            img={agent.img}
            onClick={()=>navigate(`${agent.name.toLowerCase()}`)}
          />
        ))}
      </div>
      }
      />
      <Route path=":name" element={<Agentdetails/>}/>
      </Routes>
    </>
  )
}

export default App
