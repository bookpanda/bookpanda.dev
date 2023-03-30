import {
  Card,
  CardContent,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { theme } from "src/theme";

import styles from "./Feed.module.scss";

interface IFeedItem {
  name: string;
  desc: string;
  url: string;
  image: StaticImageData;
}

export const FeedItem: FC<IFeedItem> = ({ desc, image, name, url }) => {
  const breakSM = useMediaQuery(theme.breakpoints.up("md"));
  const [show, setShow] = useState(false);
  return (
    <div
      className={clsx(
        "feed min-w-[25%] pb-4 duration-300 ease-in",
        styles.item
      )}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      role="presentation"
    >
      <Card sx={{ maxWidth: 345 }}>
        <Link href={url} rel="noopener noreferrer" target="_blank">
          <div className="h-[25vh] overflow-hidden">
            <Image
              src={image}
              style={{
                objectFit: "cover",
                minHeight: "100%",
                minWidth: "100%",
              }}
              alt="banner"
            />
          </div>
        </Link>
        <Collapse in={show || !breakSM} timeout={300}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
