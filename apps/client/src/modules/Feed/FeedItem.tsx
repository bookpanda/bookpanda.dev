import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
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
        {/* <CardMedia sx={{ height: 180 }} image={image} title="green iguana" /> */}
        <Image
          src={image}
          width={2000}
          height={2000}
          // loader={() => image}
          // style={{ objectFit: "contain" }}
          alt="banner"
          // fill
        />
        <Collapse in={show} timeout={300}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Collapse>
      </Card>
    </div>
  );
};
