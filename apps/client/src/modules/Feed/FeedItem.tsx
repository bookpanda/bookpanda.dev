import { Card, CardContent, Collapse, IconButton, Typography } from "@mui";
import GitHubIcon from "@mui/icons-material/GitHub";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import styles from "./Feed.module.scss";

interface IFeedItem {
  prop: {
    name: string;
    details: string;
    url: string;
    image: StaticImageData;
    github: string;
  };
}

export const FeedItem: FC<IFeedItem> = ({ prop }) => {
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
        <Link href={prop.url} rel="noopener noreferrer" target="_blank">
          <div className="h-[25vh] overflow-hidden">
            <Image
              src={prop.image}
              style={{
                objectFit: "cover",
                minHeight: "100%",
                minWidth: "100%",
              }}
              alt="banner"
            />
          </div>
        </Link>
        <Collapse in={show} timeout={300}>
          <CardContent sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography gutterBottom variant="h6" component="div">
              {prop.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prop.details}
            </Typography>
            <Link href={prop.github} rel="noopener noreferrer" target="_blank">
              <IconButton sx={{ marginTop: 2 }} size="large">
                <GitHubIcon />
              </IconButton>
            </Link>
          </CardContent>
        </Collapse>

        <CardContent sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography gutterBottom variant="h6" component="div">
            {prop.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prop.details}
          </Typography>
          <Link href={prop.github} rel="noopener noreferrer" target="_blank">
            <IconButton sx={{ marginTop: 2 }} size="large">
              <GitHubIcon />
            </IconButton>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
