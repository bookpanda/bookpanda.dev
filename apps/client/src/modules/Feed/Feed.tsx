import { Typography } from "@mui/material";
import { FC } from "react";

import { FeedItem } from "./FeedItem";

export const Feed: FC = () => {
  return (
    <div className="w-full bg-red-100">
      <Typography variant="h4" fontWeight={600}>
        Projects
      </Typography>
      <div className="mt-4 w-full bg-green-100">
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </div>
    </div>
  );
};
