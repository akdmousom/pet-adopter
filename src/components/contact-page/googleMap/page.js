import { Draggable, Map, Marker, ZoomControl } from "pigeon-maps";
import { useState } from "react";

const Googlemap = () => {
  const [prevColor, setPrevColor] = useState(`#F04336`)
  const [anchor, setAnchor] = useState([23.8759, 90.3795])
  const handleClick = () => {
    setPrevColor(`#000000`)
  }
  return (
    <div className="mx-5 lg:mx-24 py-10">
      <div className="bg-[#FFE3E1] dark:bg-[#AD8155] text-3xl lg:text-4xl text-center dark:text-white font-bold py-6 px-4 mb-8">Local Address</div>
      <Map height={300} dprs={[1, 2]} defaultCenter={anchor} defaultZoom={11} className='h-44 bg-[#FFE3E1] p-24 dark:bg-[#AD8155]'>
        <Draggable offset={[]}></Draggable>
        <Marker anchor={[24.9048, 91.8600]} color={prevColor} onClick={handleClick} />
        <ZoomControl buttonStyle={{ background: 'black', color: 'white' }} style={{ marginTop: '10px' }} />
      </Map>

    </div>
  );
};

export default Googlemap;
