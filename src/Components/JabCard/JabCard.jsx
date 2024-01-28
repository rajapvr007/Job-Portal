import dayjs from "dayjs";
import React from "react";
const JabCard = (props) => {
 
  const date1 = dayjs(Date.now());
  const diffInDay = date1.diff(props.postedOn, "day");

  return (
    <div className=" lg:mx-40 lg:mt-4 mx-6 mt-6">
      <div className="text-black flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-lg border border-black shadow-lg hover:translate-y-1 hover:scale-103 hover:border-red-300 ">
        <div>
          <h1 className="text-[16px] lg:text-xl font-bold">
            {props.title} -
            <button className="border border-black rounded-full lg:px-6 lg:py-2 px-3 py-1 cursor-pointer mt-2 ml-2 text-[14px]">
              <a href={props.companyUrl}> {props.companyName}</a>
            </button>
          </h1>
          <p className="lg:text-base text-[10px]">
            {props.type} | {props.experience} | {props.location}
          </p>
          <div className="flex space-x-1 mt-2">
            {props.skills.map((skill, index) => {
              return (
                <p key={index}>
                  <button className="border border-black rounded-md p-2 cursor-pointer text-gray-500 text-[8px] lg:text-base">
                    {skill}
                  </button>
                </p>
              );
            })}
          </div>
        </div>
        <div className="text-[8px] lg:text-base">
          <p> Posted {diffInDay > 1 ? `${diffInDay} days` :`${diffInDay} day`} ago</p>
            <a href={props.link} target="_blank"> 
            
          <button className="border border-black rounded-full px-6 py-2 cursor-pointer mt-2 font-semibold">
          Apply
          </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default JabCard;
