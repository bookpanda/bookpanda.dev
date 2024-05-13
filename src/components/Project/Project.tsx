"use client";

import Image from "next/image";

export const Project = () => {
  return (
    <div className="relative w-full rounded-md bg-green-200">
      <div className="absolute h-full w-full rounded-md bg-[#000000b4] p-2 opacity-0 duration-300 ease-in-out hover:opacity-100">
        <h2 className="mb-4 text-xl text-white">Prae Aksorn Sim</h2>
        <p className="text-md text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          libero fuga assumenda soluta! Pariatur nobis, mollitia nam vel
          repellendus error eum fugit commodi atque, molestiae cumque numquam
          illo unde impedit.
        </p>
      </div>
      <Image
        src="/projects/praeAksornSim.png"
        alt="proj_img"
        width={400}
        height={200}
        className="rounded-t-md"
      />
      <div className="w-full px-4">
        <h2 className="text-lg">Prae Aksorn Sim</h2>
      </div>
    </div>
  );
};
