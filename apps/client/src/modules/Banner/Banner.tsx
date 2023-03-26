import Image from "next/image";
import { FC } from "react";
import { useAppContext } from "src/core/contexts";

import { processData } from "./processData";

export const Banner: FC = () => {
  const { data } = useAppContext();
  const entry = processData(data);
  const link = entry?.media?.bannerImage ?? "";

  return (
    <div>
      <Image
        loader={() => link}
        src={link}
        width={3000}
        height={100}
        alt="banner"
      />
    </div>
  );
};
