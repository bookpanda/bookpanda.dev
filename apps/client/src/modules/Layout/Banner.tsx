import { Fade, Skeleton } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { useAppContext } from "src/core/contexts";

import { processData } from "./processData";

export const Banner: FC = () => {
  const { data } = useAppContext();
  const entry = processData(data);
  const link = entry?.media?.bannerImage ?? "";

  return (
    <div className="shadow-inner-2xl absolute -z-10 h-[42vh] w-[100vw] overflow-hidden bg-gray-800">
      {link ? (
        <Fade in={Boolean(link)} timeout={2000}>
          <Image
            loader={() => link}
            src={link}
            width={2000}
            height={100}
            alt="banner"
          />
        </Fade>
      ) : (
        <Skeleton variant="rectangular" width={2000} height={388} />
      )}
    </div>
  );
};
