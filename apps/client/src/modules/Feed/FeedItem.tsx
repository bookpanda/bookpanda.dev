import {
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import styles from "./Feed.module.scss";

interface IFeedItem {
  name: string;
  desc: string;
  url: string;
  image: StaticImageData;
}

export const FeedItem: FC<IFeedItem> = ({ desc, image, name, url }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={clsx("feed min-w-[25%] duration-300 ease-in", styles.item)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      role="presentation"
    >
      <Card sx={{ maxWidth: 345 }}>
        <Link href={url} rel="noopener noreferrer" target="_blank">
          {/* <CardContent> */}
          <div className="h-[25vh] overflow-hidden">
            <Image
              src={image}
              // width={2000}
              // height={2000}
              // fill
              style={{
                objectFit: "cover",
                minHeight: "100%",
                minWidth: "100%",
              }}
              alt="banner"
            />
          </div>
          {/* </CardContent> */}
        </Link>
        <Collapse in={show} timeout={300}>
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
