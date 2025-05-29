import JettImg from './assets/JETT.jpg'

function Card(props) {
  return (
    <>
       <div className="group  agentcard border  h-[35vh] w-[14vw] m-2 rounded-3xl relative overflow-hidden object-cover  hover:cursor-pointer">
        <div className='w-full h-[21vh]'>
       <img className="h-[300%] w-full  rounded-3xl object-cover z-0 object-top  " src={props.img}  alt="" />
       </div>
       <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black/100 to-transparent z-10"></div>
  
        <div className="group/agentinfo agentinfo bottom-0 absolute flex flex-col   lg:flex-row justify-between  w-full p-2 items-center  text-white z-10 ">
        <div className=" agentname font-bold text-3xl" >
            {props.name}
        </div>
        <div className="agentrole border border-gray-400 rounded-2xl text-xl h-7.5 text-gray-300 px-1">
            {props.role}
        </div>
        </div>
        <div className="absolute bottom-[-100%] left-0 w-full h-full bg-black/60 text-white flex justify-center items-center p-4 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500 z-20">
    <span onClick={props.onClick} className="seedetails text-xl font-bold border  rounded-2xl py-1 px-2  hover:scale-120 hover:transition-all duration-100 ">See Details</span>
  </div>
        </div>  
       
      
   </>
  )
}

export default Card
