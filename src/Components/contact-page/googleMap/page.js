import { Draggable, Map, Marker, ZoomControl } from "pigeon-maps";
import { useState } from "react";

const Googlemap = () => {
    const [prevColor, setPrevColor]=useState(`#F04336`)
    const [anchor,setAnchor]=useState([23.8759, 90.3795])
    const handleClick=()=>{
        setPrevColor(`#000000`)
    }
  return (
    <div className=" mx-5 lg:mx-24 my-10 ">
      <div className="bg-[#FFE3E1] pt-3 text-center text-xl font-bold my-3 mt-10">Local Address</div>
      <Map height={300} dprs={[1, 2]} defaultCenter={anchor} defaultZoom={11} className='h-44 bg-[#FFE3E1] p-24'>
        <Draggable offset={[]}></Draggable>
        <Marker anchor={[23.8742, 90.4007]} color={prevColor} onClick={handleClick} />
         <ZoomControl buttonStyle={{background:'black' , color:'white'}} style={{marginTop:'10px'}}  />
      </Map>
       
    </div>
  );
};

export default Googlemap;
