import React from "react";
import { Image } from "@heroui/react";

const IDCard = ({ name, domain, url }) => {
  return (
    <div
      className="flex flex-col w-[591px] h-[1004px] items-center justify-between bg-[url(/ID_Card.png)] bg-cover hover:shadow-2xl hover:shadow-textColor1 duration-200 ease-in-out transition-all"
      id="id-card"
    >
      <div className="flex w-full h-[54.7%] items-end justify-center">
        <Image
          className="object-cover flex object-center aspect-square mb-7"
          src={url}
          alt="member_image"
          width={370}
          radius="full"
        />
      </div>
      <div className="flex w-full h-[45.3%] justify-start items-start pt-8">
        <div className="w-[72%] h-[55%] flex flex-col gap-6 pl-6">
          <div className="flex w-full">
            <h1 className="text-[28px] font-horizon text-textColor2 text-left">
              {name}
            </h1>
          </div>
          <div className="flex w-full">
            <h1 className="text-[22px] font-horizon text-textColor1 text-left">
              {domain}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
