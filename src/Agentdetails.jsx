import {useParams,useNavigate} from 'react-router-dom'
import agentData from './assets/data/agents.json'

function Agentdetails() {
    const {name}=useParams()
    const navigate=useNavigate()

const agent = agentData.find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  )
      if(!agent){
        return <div className="text-white" > agent Not Found</div>
    }
  return (<>
        <button onClick={()=>navigate(-1)} className=' m-4 border py-1 px-2 rounded-2xl bg-white text-black font-extrabold  hover:cursor-pointer'>&lt;-back </button>
      <div className='container relative mx-auto p-2 '>
      <h1 className='text-7xl font-bold mb-4 z-10 relative  '>{agent.name}</h1>
        <img className='absolute z-0 right-0 mt-20 scale-[180%] opacity-50 ' src={agent.img} alt="" />
      <span className='text-2xl relative z-10 border rounded-2xl px-2 font-bold opacity-60'>{agent.role}</span>
      <div className="agentdesc relative z-10 w-full  text-2xl my-4">
        <p>{agent.desciption}</p>
      </div>
      <div className="agentabilities z-10 w-full">
        <h1 className='font-bold text-5xl relative z-10'>Abilities</h1>
        {agent.abilities && agent.abilities.length>0?
        (agent.abilities.map((ability,index)=>{
            const abilityname=Object.keys(ability).find(key => key !== "description");
            return(
                <div className="abilitiessection mt-5 gap-3 text-xl flex relative z-10 ">
                <div key={index}>
                    
                    <img className='w-20' src={ability.abimg} alt="" />
                    </div>
                    <div>
                    <h1 className='font-bold z-10'>{ability[abilityname]}</h1>
                    <p className=''> {ability.description}</p>
                    </div>
                    </div>
                    
            )
        })
    ):(
        <p className='text-gray-400 font-bold m-40 text-9xl'>No Data Found About the Agent</p>
    )}
      </div>
    </div>
    </>
  )
}

export default Agentdetails
