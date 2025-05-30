import { useState } from "react";
function Header({ setSelectedRole, selectedRole,searchText, setSearchText  }) {
  const roles = [
    { name: "All" },
    { name: "Controller" },
    { name: "Duelist" },
    { name: "Initiator" },
    { name: "Sentinel" }
  ];
  
  return (
    <>
    <div className=" container relative mx-auto flex flex-col text-center gap-5 min-h-[20vh]  py-3">
      <h1 className=" font-bold text-4xl">Explore Valorant Agents</h1>
      <div><input className="border  rounded-full py-1.5 px-4 min-w-[15vw] text-white" type="text" placeholder="Search agents " value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
     
      </div>
    <div className="   flex justify-center gap-2 flex-wrap right-0 bottom-0  text-white mb-2">
          {roles.map((role) => (
            <button
              key={role.name}
              onClick={()=>setSelectedRole(role.name)}
             className={`border rounded-full px-4 py-1 flex items-center gap-2 transition-all 
    ${selectedRole === role.name ? 'bg-white text-black ' : 'border-white text-white hover:bg-white hover:text-black'}`}
              
            >
              {role.name}
            </button>
          ))}
        </div>
    </div>
    
    </>
  )
}

export default Header
