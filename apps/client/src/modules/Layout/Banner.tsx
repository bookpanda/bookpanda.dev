import { Fade, Skeleton } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { useAppContext } from "src/core/contexts";

import { bannerHide } from "./NavBar/bannerClass";
import { processData } from "./processData";

export const Banner: FC = () => {
  const { data } = useAppContext();
  const entry = processData(data);
  const link = entry?.media?.bannerImage ?? "";

  return (
    <div className={clsx("h-[42vh] w-[100vw] bg-gray-800", bannerHide)}>
      {link ? (
        <Fade in={Boolean(link)} timeout={2000}>
          <Image
            loader={() => link}
            src={link}
            style={{ objectFit: "cover" }}
            alt="banner"
            fill
          />
        </Fade>
      ) : (
        <Skeleton variant="rectangular" width={2000} height={388} />
      )}
    </div>
  );
};
