
import React from 'react';

interface SportProps {
    image: string;
    title: string;
    height:string;
}export const Sport: React.FC<SportProps> = (props) => {
  return (
    <div>
        <div id="sportsbox" className="w-[35vh] bg-white text-center  drop-shadow-2xl h-[50vh] p-3 flex flex-col gap-3 ">
                    <img style={{height:props.height}} src={props.image} alt="" />
                    <h4>{props.title}</h4>
                    <div id="data" className="  h-[8vh] w-[32vh] bg-slate-100">
                        <table width={"100%"}>
                             <tr className="text-center text-slate-400">
                                <td>Total Events</td>
                                <td>Sports</td>
                            </tr>
                            <tr className="text-center">
                                <td>48 Events</td>
                                <td>Baseball</td>
                            </tr>
                        </table>
                    </div>
                </div>
    </div>
  )
}
