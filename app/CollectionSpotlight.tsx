import React from 'react';

interface CollectionSpotlightProps {
    heading: string;
    images: string;
    place: string;
    btntext: string;
}
export const CollectionSpotlight: React.FC<CollectionSpotlightProps> = (props) => {
  return (
    <div>
         <div id="collectionbox" className="w-[35vh] bg-white  text-center  drop-shadow-2xl h-[73vh] p-3 flex flex-col gap-3 ">
                    <img src={props.images} style={{height:"40vh"}} alt="" />
                    <div className="border-dashed border-2 border-gray-400"></div>
                    <h4>{props.heading}</h4>
                    <p>OCT 15|SUN|4:30 PM</p>
                    <p>{props.place}</p>
                    <button className="bg-black p-1 text-white">
                        {props.btntext}
                    </button>
                </div>
    </div>
  )
}
